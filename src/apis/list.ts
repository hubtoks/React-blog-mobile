import {http} from '@/utils'

type Restype<T> = {   
    message: string,
    data: T,
}


// 定义具体的接口类型,请求频道列表
export type ChannelItem = {
    id: number,
    name: string,
}
export type ChannelRes = {
    channels: ChannelItem[],
}

export function getChannelAPI() {
    return http.request<Restype<ChannelRes>>({
        url: '/channels',
    })
}

// 定义具体的接口类型,请求文章列表
type ListItem = {
    art_id: string,
    title: string,
    aut_id: string,
    comm_count: number,
    pubdate: string,
    aut_name: string,
    is_top: number,
    cover: {
        type: number,
        images: string[]
    }
}
export type ListRes = {
    pre_timestamp: string,
    results: ListItem[],
}
export type Params = {
    channel_id: string,
    timestamp: string,
}

export function getListAPI(params:Params) {
    return http.request<Restype<ListRes>>({
        url: '/articles',
        params,
    })
}