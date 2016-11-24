import React from 'react'

export default class TopMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    navFun() {

        $('header').wrapInner('<div id="header-wraper" style="position: fixed;left:0;right:0;top:0;height:110px;background-color: #fff;z-index: 1000;">');

        var $win = $(window);
        var $headerWraper = $('#header-wraper');
        var drag = true;
        headerOffset($win);
        $win.resize(function () {
            headerOffset($win);
        });
        function headerOffset($win) {
            if (drag) {
                var w = $win.width()
                if (w > 1366) {
                    var l = (w - 1366) / 2;
                    $headerWraper.css({ left: l, right: l });
                } else {
                    $headerWraper.css({ left: 0, right: 0 });
                }
                drag = false;
                setTimeout(function () {
                    drag = true;
                }, 80);
            }
        }

        $('.nav-main .dropdown').each(function (i, n) {
            var timer = [];
            $(this).bind({
                'mouseenter': function () {
                    clearTimeout(timer[i]);
                    $(this).addClass('open');
                },
                'mouseleave': function () {
                    var $this = $(this);
                    timer[i] = setTimeout(function () {
                        $this.removeClass('open');
                    }, 100);
                }
            });
        });
    }

    componentDidMount() {
        this.navFun();
    }

    render() {

        return (
            <header>
                <div id="header-wraper"
                     style={{position: 'fixed',left:0,right:0,top:0,height:110,backgroundColor: '#fff',zIndex: 1000}}>
                    <div className="header-menu">
                        <div className="container">
                            <img style={{marginTop:-3, marginLeft: 2}} width="20px" height="20px" src="./src/images/english.png" />
                            <a href="#" className="text-gary-light padding-left-5">English</a>
                        </div>
                    </div>
                    <div className="container">
                        <div className="menu-content">
                            <div className="brand">
                                <a href="#">清大益讯</a>
                            </div>
                            <nav className="nav-main">
                                <ul>
                                    <li className="active ">
                                        <a href="#">首页</a>
                                    </li>
                                    <li className="dropdown about-nav">
                                        <a href="#about">关于清大</a>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-blank nav-bg1">
                                                <div className="nav-list-wrap">
                                                    <table className="nav-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="border-control pl-3">

                                                                <h4 className="mb-1-5 mt-0-5">关于清大 </h4>
                                                                <div className="font-12 pr-2 text-justify">
                                                                    清大集团源起于清华校园，在我国资本市场转型的特殊时期成立，承担服务多层次资本市场的重任，在各方的 关切下、于数年内迅速成长为综合服务集团，为数百家中小企业提供了全方位、专业化的资本市场服务，赢得各地 政府、机构和企业的广泛赞誉。
                                                                </div>
                                                            </td>
                                                            <td className="border-control">
                                                                <div className="all-nav-list about-nav-list">
                                                                    <ul>
                                                                        <li data-id="3" data-refid="0">
                                                                            <a href="#/introduce">
                                                                            <span className="arrow-f pull-right"></span>清大简介
                                                                            </a>
                                                                        </li>
                                                                        <li data-id="4" data-refid="0">
                                                                            <a href="#/development">
                                                                            <span className="arrow-f pull-right"></span>发展历程
                                                                            </a>
                                                                        </li>
                                                                        <li data-id="5" data-refid="0">
                                                                            <a href="#/team">
                                                                                <span className="arrow-f pull-right"></span>管理团队
                                                                            </a>
                                                                        </li>
                                                                        <li data-id="6" data-refid="0">
                                                                            <a href="#/honor">
                                                                                <span className="arrow-f pull-right"></span>资质和荣誉
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <span className="arrow arrow-sm-3"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown service-nav  product-nav">
                                        <a href="#service">产品与服务</a>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-blank nav-bg1">
                                                <div className="nav-list-wrap">
                                                    <table className="nav-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="border-control pl-3">

                                                                <h4 className="mb-1-5 mt-0-5">产品与服务</h4>
                                                                <div className="font-12 pr-2 text-justify">
                                                                    清大产品与服务文案。。。。。。
                                                                </div>
                                                            </td>
                                                            <td className="border-control">
                                                                <div className="all-nav-list about-nav-list">
                                                                    <ul>
                                                                        <li data-id="18" data-refid="0"><a
                                                                            href="#/n3ban"><span
                                                                            className="arrow-f pull-right"></span>牛三板</a>
                                                                        </li>
                                                                        <li data-id="19" data-refid="0"><a
                                                                            href="#/qdjf"><span
                                                                            className="arrow-f pull-right"></span>清大金服</a>
                                                                        </li>
                                                                        <li data-id="68" data-refid="0"><a
                                                                            href="#/qdrj"><span
                                                                            className="arrow-f pull-right"></span>清大软件</a>
                                                                        </li>
                                                                        <li data-id="20" data-refid="0"><a
                                                                            href="#/qdsj"><span
                                                                            className="arrow-f pull-right"></span>清大数据</a>
                                                                        </li>
                                                                        <li data-id="20" data-refid="0"><a
                                                                            href="#/qdcm"><span
                                                                            className="arrow-f pull-right"></span>清大传媒</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <span className="arrow arrow-sm-3"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#/dynamic">清大动态</a>
                                    </li>
                                    <li>
                                        <a href="#/contact">联系我们</a>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
