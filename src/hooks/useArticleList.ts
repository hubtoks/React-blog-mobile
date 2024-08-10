import { getListAPI } from "@/apis/list"
import { useEffect, useState } from "react"
import type { ListRes } from "@/apis/list"

type Props = {
    channel_id: string,
}

function useArticleList(props: Props) {
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
    return {
        articleList
    }
}

export {
    useArticleList
}
