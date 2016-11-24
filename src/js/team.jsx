import React from 'react'

export default class TeamPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div className="banner">
                    <img width="100%" src="./src/images/team_title.jpg"/>
                </div>
                <div className="service_content">
                    <table className="service-table" style={{width:'1100px'}}>
                        <tr>
                            <td style={{verticalAlign:'top'}}>
                                <div className="pic">
                                    <img src="./src/images/boss.jpg" alt=""/>
                                </div>
                            </td>
                            <td>
                                <div className="boss_card">
                                    <section style={{textAlign:'left',paddingLeft: '40px'}}>
                                        <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>董事长、创始人-张驰轩</h4>
                                        <p>
                                            <li>《清华大学金融评论》常务理事</li>
                                            <li>中国会计报副理事长</li>
                                            <li>香港金融学院院长助理</li>
                                            <li>兼新三板学院院长</li>
                                        </p>
                                    </section>
                                </div>
                                <section style={{textAlign:'left',width:'490px',paddingLeft: '40px'}}>
                                    <p>
                                        清华大学经济管理学院EMBA硕士、经济学博士、高级工程师、农艺师、MPAcc硕士、法学学士、副研究员、硕士生导师。
                                    </p>
                                    <p>
                                        曾任浙江省农信总社处长、上海市房产局处长、江西省农委局长，主导地方金融改革，并推动多家企业IPO。曾入调中央政策研究办，及中财办主持2020年国家远景规划金融组合房地产组执笔。曾任财政部调研员主持制定2010年国家小企业会计准则、中国电子支付联合会副秘书长主持第三方支付政策制定。
                                    </p>
                                    <p>
                                        曾任江西农业集团副总兼财务总监、金丰易居营运总监、海航基金公司执行董事，中融证券(香港)执行董事。
                                    </p>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="service_title_box" style={{fontSize: '40px',lineHeight: '50px'}}>
                    我们的团队
                </div>
                <div className="service_title_box" >
                    <img src="./src/images/myteam.jpg" alt=""/>
                </div>
                <div className="service_content">
                    <table className="service-table" style={{width:'1100px'}}>
                        <tr>
                            <td style={{verticalAlign:'top'}}>
                                <section style={{textAlign:'left',width:'400px',paddingLeft: '40px'}}>
                                    <p>
                                        清大集团拥有一支由资深金融人士、传媒人士、技术专家和数据专家组成的精英团队。员工多为海外留学回国背景，拥有知名大学硕士、博士学历，来自招商证券、东方证券、海通证券和华融证券等知名券商，毕马威华振等国际会计师事务所，以及银联智惠研究院、知名私募基金等机构，拥有丰富并购重组、IPO、投融资、连续成功创业经验，曾为证券交易所、证监会和全国股转系统提供信息系统开发服务，具有海量线下交易数据为基础的分析应用增值服务经验。
                                    </p>
                                </section>
                            </td>

                            <td style={{verticalAlign:'top'}}>
                                <div className="pic">
                                    <img src="./src/images/team_up.png" alt=""/>
                                </div>
                                <div className="pic" style={{paddingTop:'20px',paddingBottom:'20px'}}>
                                    <img src="./src/images/team_down.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
