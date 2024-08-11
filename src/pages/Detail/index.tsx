import { useDetail } from "@/hooks/useDetail"
import { NavBar } from "antd-mobile"


const Detail = () => {
  const {detail} = useDetail()
  if (!detail) {
    return <div>加载中...</div>
  }

  return (
    <div>
      <NavBar onBack={() => window.history.back()}>{detail?.title}</NavBar>
      <div dangerouslySetInnerHTML={{__html: detail?.content}}></div>
    </div>
  )
}

export default Detail