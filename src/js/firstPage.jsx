
import React from 'react'
import QingDaService from './service.jsx'
import QingDaNews from './news.jsx'
import QingDaVideo from './video.jsx'
import Collaborator from './collaborator.jsx'
export default class FirstPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div className="banner">
                    <img width="100%" src="./src/images/company.png"/>
                </div>
                <div className="banner" style={{height:122,backgroundColor:'#363636'}}>
                    <a name="about" className="anchor"></a>
                    <div style={{float:'right',marginRight: 100,marginTop:"10px"}}>
                       <img width="397" height="118" src="./src/images/about.png"/>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="banner block-main">
                    <div style={{height:30}}></div>
                    <table className="about-table">
                        <td>
                            <div className="pic">
                                <img src="./src/images/club.png" alt="" title="清大会所"/>
                            </div>
                        </td>
                        <td>
                            <section>
                                <p>清大集团源起于清华校园，在我国资本市场转型的特殊时期成立，承担服务多层次资本市场的重任，在各方的 关切下、于数年内迅速成长为综合服务集团，为数百家中小企业提供了全方位、专业化的资本市场服务，赢得各地 政府、机构和企业的广泛赞誉。</p>
                                <p><br /></p>
                                <p>清大集团以北京为管理中心、上海为运营中心、香港为培训中心并辐射全国、走向全球，是我国多层次资本 市场中最早以战略眼光布局全球的机构。</p>
                                <p><br /></p>
                            </section>
                        </td>
                    </table>

                    <div style={{float:'right',marginRight: 100}}>
                        <a name="service" className="anchor"></a><img src="./src/images/service.png"/>
                    </div>
                    <div>
                        <div className="clear"></div>
                        <QingDaService/>
                    </div>
                </div>

                <QingDaNews/>
                <div className="banner" style={{margin:'0 auto',display:'block',textAlign:'center',marginBottom:20}}>
                    <img src="./src/images/video.png"/>
                </div>
                <div className="clear"></div>
                <QingDaVideo/>
                <div className="banner" style={{margin:'0 auto',display:'block',textAlign:'center',marginBottom:20}}>
                    <img src="./src/images/collaborator.png"/>
                </div>
                <div className="clear"></div>
                <Collaborator/>
            </div>
        )
    }
}
