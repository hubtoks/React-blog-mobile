
import './index.css'
import { useTabs } from '@/hooks/useTabs'
import { HomeList } from './comp/HomeList'
import { Tabs } from "antd-mobile"
import { useState } from 'react'

const Home = () => {
    const { channelList } = useTabs()
    const [active, setActive] = useState('0')
    
    return (
        <div>
            <div className="tab">
                <Tabs defaultActiveKey={active}>
                    {channelList.map((item) => (
                        <Tabs.Tab title={item.name} key={item.id} >
                         <div className='list'> 
                        <HomeList channel_id={''+item.id}/>  {/*起点，将频道列表中的id作为字符串，传给HomeList组件*/}
                        </div>  
                        </Tabs.Tab>))}
                    
                </Tabs>
                
            </div>
        </div>
    )

}
export default Home