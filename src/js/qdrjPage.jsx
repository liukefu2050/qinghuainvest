import React from 'react'

export default class QdrjPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div>
                    <div style={{height:30}}></div>
                    <div className="service_content">
                        <table className="service-table" style={{width:'1100px'}}>
                            <tr>
                                <td style={{verticalAlign:'top'}}>
                                    <div className="pic">
                                        <img src="./src/images/qdrj_logo.png" alt=""/>
                                    </div>
                                    <section style={{padding: '50px'}}>
                                        <p>
                                            清大（上海）软件科技有限公司是清大集团旗下专门从事金融行业软件系统集成和开发、互联网产品开发以及为行业用户提供相关信息、技术、咨询服务的民营高科技公司。公司主要围绕我国新三板业务市场领域，为相关参与主体，如监管机构、挂牌企业、主办券商等中介机构以及投资者提供金融信息终端、资源对接平台、投行业务系统、信息披露、核心主题数据库等软件、产品或是内容、数据的服务。公司冀望借新三板市场东风及日益增长的服务需求规模，发现机会、正视机会、抓住机会，并迅速成长为互联网高科技领域的、专注服务于三板市场的、一颗冉冉升起的软件业新星。
                                        </p>
                                    </section>
                                </td>
                                <td>
                                    <div className="pic">
                                        <img src="./src/images/qdrj_image.png" alt=""/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="service_title title_hexinyewu">
                    <h1>核心业务</h1>
                </div>

                <div className="service_content" style={{height:'400px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <section>
                                    <p style={{textAlign:'left'}}>
                                        <li>●  数据采集开发</li>
                                        <li>●  商业计划、项目规划</li>
                                        <li>●  业务需求梳理、管理及产品设计</li>
                                        <li>●  传统软件、移动互联网应用开发和迭代</li>
                                        <li>●  信息披露（含资深XBRL知识和技能）</li>
                                        <li>●  互联网用户服务</li>
                                    </p>
                                </section>
                            </td>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdsj_hxyw.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="service_title title_hexintuandui">
                    <h1>核心团队</h1>
                </div>

                <div className="service_content" style={{height:'540px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdrj_hxdd.png" alt=""/>
                                </div>
                            </td>
                            <td>
                                <section style={{textAlign:'left'}}>
                                    <p>
                                        <h4>总经理 董凤江</h4>
                                        <li>上海交通大学软件工程硕士，</li>
                                        <li>中国证监会信息披露标准工作专家组成员。</li>
                                        <li>曾带领技术团队服务过国内200多家金融业客户，</li>
                                        <li>主导过上海证券交易所上市公司新一代信息披露系统、</li>
                                        <li>基金信息披露系统、证监会IPO审核系统、</li>
                                        <li>股转系统BPM系统、中信信托全业务流程管理系统</li>
                                        <li>牛三板APP等金融项目的开发和管理。</li>
                                    </p>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="service_title title_anlizhanshi">
                    <h1>案例展示</h1>
                </div>

                <div className="service_content" style={{height:'300px',margin: '0 auto',width:'900px'}}>
                    <section style={{textAlign:'left',paddingLeft:'10px'}}>
                        <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>1、牛三板移动应用金融终端</h4>
                        <p>
                            为新三板主要参与者提供的综合移动应用服务终端，内容包括资讯、行情等基础功能服务，以及其他资源对接功能，以及针对企业方、中介机构和投资者的VIP高级服务功能。
                        </p>
                    </section>
                    <section style={{textAlign:'left',paddingLeft:'10px'}}>
                        <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>2、公告工场</h4>
                        <p>
                            首啖三板可视化信息披露头汤，让阅读公告从此告别枯燥乏味。该产品已成为挂牌企业在新媒体，主要是微信端推广的新利器。
                        </p>
                    </section>
                    <section style={{textAlign:'left',paddingLeft:'10px'}}>
                        <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>3、证立方（STOCKSCUBE)</h4>
                        <p>
                            基于证券市场法规、舆情、产品、股权、董监高、投资等方面的基础数据，结合外部相关数据以及先进数据处理技术打造的立体特色数据、工具、资源服务平台。产品发展形态为CUBE、CUBE+ 、STOCK+，可满足证券市场不同层次用户服务需求。
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}
