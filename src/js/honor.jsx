import React from 'react'

export default class HonorPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div className="honor_bg">
                    <div className="service_title_box" style={{paddingTop:'150px'}}>
                        <img src="./src/images/honor_title.png" alt=""/>
                    </div>

                    <div className="service_content">
                        <table className="service-table">
                            <tr>
                                <td style={{width:'200px',borderRight:'2px solid #000000'}}>

                                </td>
                                <td style={{color: '#000000',fontWeight: '500'}}>
                                    <section>
                                        <p style={{textAlign:'left'}}>
                                            <li>上海股交中心筹建单位，最佳推荐团队，最多推荐机构</li>
                                            <li>安徽股交中心筹建单位，最多推荐机构，首批战略会员</li>
                                            <li>海南股交中心筹建单位，制度设计者</li>
                                            <li>甘肃、吉林、武汉、浙江、江苏、河北股交核心会员</li>
                                            <li>上海、安徽、海南等地股交中心的筹备成员</li>
                                            <li>上海股交中心单笔融资规模最大的记录保持者</li>
                                            <li>上海股交中心可转换债券产品的开创者</li>
                                            <li>清华大学EMBA上海股权投资俱乐部</li>
                                            <li>哈尔滨工程大学联合博士科创中心培养点</li>
                                            <li>上海交大中国CFO俱乐部</li>
                                            <li>华东政法大学研究生培养基地</li>
                                            <li>《清华金融评论》金融家理事会常务理事单位</li>
                                        </p>
                                    </section>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="service_title_box" style={{marginTop:'200px'}}>
                        <img src="./src/images/honor.png" alt=""/>
                    </div>
                    <div className="service_content">
                        <table className="service-table">
                            <tr>
                                <td style={{width:'200px'}}>

                                </td>
                                <td style={{verticalAlign:'top',textAlign: 'right'}}>
                                    <div className="pic">
                                        <img src="./src/images/honor1.jpg" alt="" width='512px'/>
                                    </div>
                                    <div className="pic" style={{paddingTop:'20px',paddingBottom:'20px'}}>
                                        <img src="./src/images/honor2.jpg" alt=""/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div className="service_content" >
                    <table className="service-table">
                        <tr>
                            <td style={{width:'200px'}}>

                            </td>
                            <td style={{verticalAlign:'top',textAlign: 'right'}}>
                                <div className="pic">
                                    <img src="./src/images/honor_bottom.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
