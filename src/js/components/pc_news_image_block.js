import React,{Component} from 'react'
import {Card} from 'antd'
import {Link} from 'react-router-dom'

class PCNewsImageBlock extends Component {
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
        const styleImage = {
            display:'block',
            width:this.props.imageWidth,
            height:'90px'
        }
        const styleH3 = {
            width:this.props.imageWidth,
            whiteSpace:'nowrap',
            overflow:"hidden",
            textOverflow:"ellipsis"
        }
        const cardStyle = {
            display:'flex',
            flexWrap:'wrap',
            justifyContent:"space-between"
        }
        const {news} = this.state;
        const newsList= news.length
            ?news.map((newsItem,index)=>(
               <div key={index} className="imageblock">
                   <Link to={`detail/${newsItem.uniquekey}`} target='_blank'>
                       <div className="custom-image">
                           <img  style={styleImage} src={newsItem.thumbnail_pic_s} alt=""/>
                       </div>
                       <div className='custom-card'>
                           <h3 style={styleH3}>{newsItem.title}</h3>
                           <p>{newsItem.author_name}</p>
                       </div>
                   </Link>
               </div>
            ))
            :null
        return (
            <div className='topNewsList'>
                <Card title={this.props.cardTitle}>
                    <div style={cardStyle}>
                        {newsList}
                    </div>
                </Card>
            </div>
        )

    }
}
export default PCNewsImageBlock