import { getChannalAPI } from "@/apis/list"
import { useEffect} from "react"
const Home = () => {
    useEffect(() => {
        getChannalAPI().then(res => {
            console.log(res.data)
        }
        )
    })
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
    
}
export default Home