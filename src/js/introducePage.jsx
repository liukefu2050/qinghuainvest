import React from 'react'

export default class IntroducePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div className="banner">
                    <img width="100%" src="./src/images/Visual.jpg"/>
                </div>
                <div className="service_title_box" >
                    <img src="./src/images/about_qdjd.jpg" alt=""/>
                </div>
                <div className="service_title_box" >
                    <section style={{textAlign:'left', fontSize: '17px',lineHeight: '30px',paddingLeft: '40px'}}>
                        <p>
                            清大集团源起于清华校园，在我国资本市场转型的特殊时期成立，承担服务多层次资本市场的重任，在各方的关切下、于数年内迅速成长为综合服务集团，为数百家中小企业提供了全方位、专业化的资本市场服务，赢得各地政府、机构和企业的广泛赞誉。
                        </p>
                    </section>
                </div>
                <div className="service_title_box" >
                    <section style={{textAlign:'left',fontSize: '17px',lineHeight: '30px',paddingLeft: '40px'}}>
                        <p>
                            清大集团以北京为管理中心、上海为运营中心、香港为培训中心并辐射全国、走向全球，是我国多层次资本市场中最早以战略眼光布局全球的机构。
                        </p>
                    </section>
                </div>
                <div className="banner">
                    <img width="100%" src="./src/images/about_qdhs.jpg"/>
                </div>

                <div className="service_content">
                    <table className="service-table" style={{width:'1100px'}}>
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/china.jpg" alt=""/>
                                </div>
                            </td>
                            <td>
                                <section style={{textAlign:'left',width:'400px',paddingLeft: '40px'}}>
                                    <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>国内</h4>
                                    <p>
                                        在北京、上海、安徽、广东、吉林、湖南、湖北、海南、甘肃、山西、江西、陕西、辽宁、河北、浙江、江苏、福建、山东、宁夏、贵州、哈尔滨、四川及重庆等主要省市设有23家全资子公司。
                                    </p>
                                </section>
                                <section style={{height:'100px'}}>

                                </section>
                                <section style={{textAlign:'left',width:'400px',paddingLeft: '40px'}}>
                                    <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>国外</h4>
                                    <p>
                                        在中国台湾、香港、德国、日本和韩国设有办事处。与香港、澳洲、德国、英国、美国、台湾、日本、韩国等交易所形成战略合作。
                                    </p>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="service_title_box" >
                    <img src="./src/images/about_bottom.png" alt=""/>
                </div>
            </div>
        )
    }
}
