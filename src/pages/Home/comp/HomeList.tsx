import { useArticleList } from '@/hooks/useArticleList'
import { List, Image } from 'antd-mobile'



const HomeList = (props: { channel_id: string }) => {  //HomeList组件接受一个channel_id作为参数，进而将参数props传给useArticleList
    const { articleList } = useArticleList(props)
    
    return (


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
    )
}

export { HomeList }