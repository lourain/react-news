import React, {Component} from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import MobileList from './mobile_list'
import {Tabs,Carousel} from 'antd'

const TabPane = Tabs.TabPane

class MobileIndex extends Component {
    render() {
        const setting = {
            autoplay: true
        }
        return (
            <div id='mobile'>
                <MobileHeader></MobileHeader>
                <div className="carousel">
                    <Carousel  {...setting}>
                        <img src={require('../../images/one.jpg')} alt=""/>
                        <img src={require('../../images/two.jpg')} alt=""/>
                        <img src={require('../../images/three.jpg')} alt=""/>
                        <img src={require('../../images/four.jpg')} alt=""/>
                    </Carousel>
                </div>
                <Tabs>
                    <TabPane tab='头条' key='1'>
                        <MobileList count={20} type='top'/>
                    </TabPane>
                    <TabPane tab='社会' key='2'>
                        <MobileList count={20} type='shehui'/>
                    </TabPane>
                    <TabPane tab='国内' key='3'>
                        <MobileList count={20} type='guonei'/>
                    </TabPane>
                    <TabPane tab='国际' key='4'>
                        <MobileList count={20} type='guoji'/>
                    </TabPane>
                    <TabPane tab='娱乐' key='5'>
                        <MobileList count={20} type='yule'/>
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}

export default MobileIndex