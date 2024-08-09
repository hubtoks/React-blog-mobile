import {http} from '@/utils'

type Restype<T> = {   // 定义一个泛型接口,<T>表示可以接受任意类型,之后传什么就是什么
    message: string,
    data: T,
}

//定义具体的接口类型
type ChannalItem = {
    id: number,
    name: string,
}
type ChannalRes = {
    channels: ChannalItem[],
}

export function getChannalAPI() {
    return http.request<Restype<ChannalRes>>({
        url: '/channels',
    })
}