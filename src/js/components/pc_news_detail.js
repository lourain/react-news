import React, {Component} from 'react'
import {Row, Col} from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

export default class PCNewsDetail extends Component {
    constructor() {
        super()
        this.state = {
            newsItem: ''
        }
    }

    componentDidMount() {
        var myFetchOption = {
            method: "GET"
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`, myFetchOption)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json})
                document.title = `${this.state.newsItem.title} - React News | React 驱动的新闻平台`
            })
    }

    createMarket() {
        return {__html: this.state.newsItem.pagecontent}
    }

    render() {
        console.log(this.props.match.params.uniquekey);
        return (
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className='container'>
                            <div className='articleContainer' dangerouslySetInnerHTML={this.createMarket()}></div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <PCFooter/>
            </div>
        )
    }
}