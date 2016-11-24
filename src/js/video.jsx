import React from 'react'

export default class QingDaVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var videoUrl = "./dist/nsanban.mp4";
        return (
            <div className="banner">
                <table className="video-table">
                    <td  width="34%">
                        <section>
                            <p>
                                牛三板APP是一款针对新三板市场参与者的综合移动应用服务终端，集投资、媒体、资源对接服务功能于一体，是清大集团互联网服务线上移动端知名品牌。
                            </p>
                            <p><br /></p>
                            <p>
                                自5.0版本起，牛三板APP开启了超越自我的实用、精简、特色方向的升级改造。其中新增“消息”模块，可为用户量身定制重要资讯；新增“会客”模块，提供资金、客户、战略的精准匹配；新增“投资”模块，独创情绪指数、牛魔方盯盘，并结合机会推荐、诊股、视频、互动资讯等，可让投资者及时把握机会、获取二级市场投资收益。而升级的首页主题频道，则让参与者发现数据之美，对三板市场了解更多。还有更多精彩，等着你来发现吧！
                            </p>
                            <p><br /></p>
                        </section>
                    </td>
                    <td width="66%">
                        <div className="playDiv">
                            <video src={videoUrl} controls="controls">
                                您的浏览器不支持 video 标签。
                            </video>
                        </div>
                    </td>
                </table>
            </div>
        )
    }
}
