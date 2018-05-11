import React, {Component} from 'react';
import  {Route} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import PCIndex from './js/components/pc_index'
import MobileIndex from './js/components/mobile_index'
import PCNewsDetail from './js/components/pc_news_detail'
class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaQuery minDeviceWidth={992}>
                   <Route path='/' component={PCIndex} exact/>
                   <Route path='/detail/:uniquekey' component={PCNewsDetail} />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={992}>
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
