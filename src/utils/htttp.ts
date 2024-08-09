import axios from "axios";

const http = axios.create({
    baseURL: 'https://geek.itheima.net', // 基础url，解决跨域，部署项目时，需要根据实际情况修改
    timeout: 5000 // 超时时间
});

http.interceptors.request.use((config) => {



    return config
}, (error) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    //2xx范围内
    return response.data
}, (error) => {
    //2xx范围外

    return Promise.reject(error)
})

export { http }