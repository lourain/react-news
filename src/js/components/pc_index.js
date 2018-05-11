import React,{Component} from 'react'
import PCHeader from './pc_header.js'
import PCNewsContainer from './pc_newscontainer'
import PCFooter from './pc_footer'
class PCIndex extends Component {
    render() {
        return (
            <div id='pc'>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}
export default PCIndex