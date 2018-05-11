import React,{Component} from 'react'
import {Card} from 'antd'
import {Link} from 'react-router-dom'

class PCNewsBlock extends Component {
    constructor(){
        super()
        this.state = {
            news:''
        }
    }
    componentWillMount(){
        var myFetchOption = {
            method:'GET'
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`,myFetchOption)
            .then(response=>response.json())
            .then(json=>this.setState({news:json}))
    }
    render(){
        const {news} = this.state;
        const newsList= news.length
        ?news.map((newsItem,index)=>(
            <li key={index}>
                <Link to={`detail/${newsItem.uniquekey}`} target='_blank'>
                    {newsItem.title}
                </Link>
            </li>
            ))
         :null
        return (
            <div className='topNewsList'>
                <Card>
                    {newsList}
                </Card>
            </div>
        )

    }
}
export default PCNewsBlock