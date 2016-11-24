/**
 * 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, hashHistory,browserHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

import TopMenu from './topMenu.jsx'
import AntMenu from './antMenu.jsx'
import Bottom from './bottom.jsx'
import FirstPage from './firstPage.jsx'
import N3banPage from './n3banPage.jsx'
import QdcmPage from './qdcmPage.jsx'
import QdjfPage from './qdjfPage.jsx'
import QdrjPage from './qdrjPage.jsx'
import QdsjPage from './qdsjPage.jsx'
import IntroducePage from './introducePage.jsx'
import DevelopPage from './development.jsx'
import HonorPage from './honor.jsx'
import TeamPage from './team.jsx'
import DynamicPage from './dynamic.jsx'
import Contact from './contact.jsx'
import Vote from './vote.jsx'
//css
/*import '../css/common.css'
import '../css/dookayui.css'
import '../css/jquery-ui.min.css'
import '../css/index.css'*/

// 配置导航
class WebFrame extends React.Component {
    constructor(props) {
        super(props)
    }
    //<AntMenu></AntMenu>
    //<TopMenu></TopMenu>
    render() {
        return (
            <div>
                <AntMenu></AntMenu>
                { this.props.children}
                <Bottom></Bottom>
            </div>
        )
    }
}
// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={WebFrame}>
            <IndexRoute component={FirstPage} />
            <Route path="home" component={FirstPage} />
            <Route path="n3ban" component={N3banPage} />
            <Route path="qdcm" component={QdcmPage} />
            <Route path="qdjf" component={QdjfPage} />
            <Route path="qdrj" component={QdrjPage} />
            <Route path="qdsj" component={QdsjPage} />
            <Route path="introduce" component={IntroducePage} />
            <Route path="development" component={DevelopPage} />
            <Route path="honor" component={HonorPage} />
            <Route path="team" component={TeamPage} />
            <Route path="dynamic" component={DynamicPage} />
            <Route path="contact" component={Contact} />
            <Route path="vote" component={Vote} />
        </Route>
    </Router>
), document.getElementById('app'));


