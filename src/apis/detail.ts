import { type Restype} from './list'
import { http } from '@/utils';

export type DetailDataType = {
    art_id: string;
    attitude: number;
    aut_id: string;
    aut_name: string;
    aut_photo: string;
    comm_count: number;
    content: string;
    is_collected: boolean;
    is_followed: boolean;
    like_count: number;
    pubdate: string;
    read_count: number;
    title: string;
}


export const getDetailAPI = (id: string) => {
    return http.request<Restype<DetailDataType>>({
        url: `/articles/${id}`
    })
}

export type DetailRes = {
    channel_id: number;
    content: string;
    cover: {
       type: number;
       images: string[];
    }
    id: string;
    pub_date: string;
    title: string;
}

//获取文章详情
export function getArticleDetailAPI(id: string) {
    return http.request<Restype<DetailRes>>({
        url: `/mp/articles/${id}`,
    }) 
}