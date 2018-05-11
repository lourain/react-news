import React, {Component} from 'react'
import {Row, Col, Tabs, Carousel} from 'antd'
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'
const TabPane = Tabs.TabPane

export default class PCNewsContainer extends Component {

    render() {
        const setting = {
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='container'>
                        <div className='leftContainer'>
                            <div className="carousel">
                                <Carousel  {...setting}>
                                    <img src={require('../../images/one.jpg')} alt=""/>
                                    <img src={require('../../images/two.jpg')} alt=""/>
                                    <img src={require('../../images/three.jpg')} alt=""/>
                                    <img src={require('../../images/four.jpg')} alt=""/>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={9} type='guoji' width='400px' cardTitle='国际头条' imageWidth='112px'/>
                            <PCNewsImageBlock count={9} type='shehui' width='400px' cardTitle='社会头条' imageWidth='112px'/>
                        </div>
                        <Tabs className='tabs_news'>
                            <TabPane tab='新闻' key='1'>
                                <PCNewsBlock count={26} type='yule'/>
                            </TabPane>
                            <TabPane tab='国际' key='2'>
                                <PCNewsBlock count={26} type='guoji'/>
                            </TabPane>
                        </Tabs>


                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
