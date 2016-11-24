import React from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
export default class AntMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'home'
        };
    }
    handleClick = (e) =>  {
        this.setState({
            current: e.key
        });
    }
    render() {
        return (
        <header>
            <div id="header-wraper"
                 style={{position: 'fixed',left:0,right:0,top:0,height:110,zIndex: 1000}}>
                <div className="header-menu">
                    <div className="container">
                        <img style={{marginTop:-3, marginLeft: 50}} width="20px" height="20px" src="./src/images/english.png" />
                        <a href="#" className="text-gary-light padding-left-5">English</a>
                    </div>
                </div>
                <div className="container">
                    <div className="menu-content">
                        <div className="atmenu_brand">
                            <a href="#">清大益讯</a>
                        </div>
                        <nav className="atmenu-main">
                            <Menu onClick={this.handleClick}
                                  selectedKeys={[this.state.current]}
                                  mode="horizontal"
                            >
                                <Menu.Item key="home">
                                    <a href="#/">首页</a>
                                </Menu.Item>
                                <SubMenu title={<span><a href="#/about">关于清大</a><Icon type="caret-down" /></span>}>
                                    <Menu.Item key="about:1"><a href="#/introduce">清大简介</a></Menu.Item>
                                    <Menu.Item key="about:2"><a href="#/development">发展历程</a></Menu.Item>
                                    <Menu.Item key="about:3"><a href="#/team">管理团队</a></Menu.Item>
                                    <Menu.Item key="about:4"><a href="#/honor">资质和荣誉</a></Menu.Item>
                                </SubMenu>
                                <SubMenu title={<span><a href="#/service">产品与服务</a><Icon type="caret-down" /></span>}>
                                    <Menu.Item key="server:1"><a href="#/n3ban">牛三板</a></Menu.Item>
                                    <Menu.Item key="server:2"><a href="#/qdjf">清大金服</a></Menu.Item>
                                    <Menu.Item key="server:3"><a href="#/qdrj">清大软件</a></Menu.Item>
                                    <Menu.Item key="server:4"><a href="#/qdsj">清大数据</a></Menu.Item>
                                    <Menu.Item key="server:5"><a href="#/qdcm">清大传媒</a></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="news">
                                    <a href="#/dynamic">清大动态</a>
                                </Menu.Item>
                                <Menu.Item key="contact_us">
                                    <a href="#/contact">联系我们</a>
                                </Menu.Item>
                            </Menu>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}
