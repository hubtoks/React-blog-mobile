import { getDetailAPI, DetailDataType } from "@/apis/detail"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


function useDetail() {
    const [detail, setDetail] = useState<DetailDataType | null>(null);

    const [Params] = useSearchParams()
    const id = Params.get('id')

    useEffect(() => {
        const getDetail = async () => {
            try {
                
                const res = await getDetailAPI(id!);
                
                const resDetail = (res.data as unknown as DetailDataType)
                setDetail(resDetail)
            } catch (error) {
                console.error('获取频道列表失败', error);
            }
        };
        getDetail()
    }, [id]);
    return {
        detail
    }
}

export {
    useDetail
}
