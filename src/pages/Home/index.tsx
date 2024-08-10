import { getChannelAPI } from "@/apis/list"
import { useEffect, useState } from "react"
import './index.css'
import type { ChannelItem,ChannelRes } from "@/apis/list"
import { Tabs } from "antd-mobile"

const Home = () => {
    const [channelList, setChannelList] = useState<ChannelItem[]>([]);
    useEffect(() => {
        const getChannel = async () => {
            try {
                const res = await getChannelAPI();
                const channelData = (res.data as unknown as ChannelRes).channels;//需要类型断言，不然会标红
                setChannelList(channelData);
            } catch (error) {
                console.error('获取频道列表失败', error);
            }
        };

        getChannel();
    }, []);
    return (
        <div>
            <div className="tab">
                <Tabs>
                    {channelList.map((item) => (<Tabs.Tab title={item.name} key={item.id}></Tabs.Tab>
                    ))
                    }
                </Tabs>
            </div>
        </div>
    )

}
export default Home