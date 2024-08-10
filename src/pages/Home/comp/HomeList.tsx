
import { List, Image,InfiniteScroll } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { getListAPI } from "@/apis/list"
import type { ListRes } from "@/apis/list"



const HomeList = (props: { channel_id: string }) => {  //HomeList组件接受一个channel_id作为参数，用于获取对应频道下的文章列表
    const [articleList, setarticleList] = useState<ListRes>({
        results: [],
        pre_timestamp: '' + new Date().getTime()  //''+是为了将时间戳转换为字符串
    });

    const { channel_id } = props

    useEffect(() => {
        const getArticle = async () => {
            try {
                const res = await getListAPI({
                    channel_id:channel_id,
                    timestamp: '' + new Date().getTime()
                });

                const article = (res.data as unknown as ListRes)//同样类型断言防止报错

                setarticleList({
                    results: article.results,
                    pre_timestamp: article.pre_timestamp
                });
            } catch (error) {
                console.error('获取文章列表失败', error);
            }
        };

        getArticle();
    }, [channel_id]);




    //是否有更多数据，有才会加载(且小于threshold规定的阈值)
    const [hasMore, setHasMore] = useState(true)
    const loadMore = async () => {
        console.log('加载更多');
        try {
            const res = await getListAPI({
                channel_id:channel_id,
                timestamp: articleList.pre_timestamp
            });

            const article = (res.data as unknown as ListRes)//同样类型断言防止报错

            setarticleList({
                results: [...articleList.results, ...article.results],  //...老数据，...新数据
                pre_timestamp: article.pre_timestamp
            });
            //停止加载
            if (article.results.length === 0) {
                setHasMore(false)
            }
        } catch (error) {
            console.error('获取文章列表失败', error);
        }
    }

    
    return (

        <>
        <List>
            {articleList.results.map((item) => (
                <List.Item
                    key={item.art_id}
                    prefix={
                        <Image
                            src={item.cover.images?.[0]}
                            style={{ borderRadius: 20 }}
                            fit='cover'
                            width={40}
                            height={40}
                        />
                    }
                    description={item.pubdate}>
                    {item.title}
                </List.Item>
            ))}
        </List>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10} />
        </>
    )
}

export { HomeList }