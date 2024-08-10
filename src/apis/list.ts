import {http} from '@/utils'

type Restype<T> = {   
    message: string,
    data: T,
}

// 定义具体的接口类型
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