import React from 'react'

export default class QdjfPage extends React.Component {
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
                                        <img src="./src/images/qdjf_logo.png" alt=""/>
                                    </div>
                                    <section style={{padding: '50px'}}>
                                        <p>
                                            清大金服为清大益讯集团框架下负责金融服务板块运作的一家子公司。一贯秉承以清大益讯集团公司为管理中心、上海子公司为金融服务运营中心并逐步辐射全国乃至全球的发展战略。各项业务迅速发展，势头良好。公司积极致力于项目资源探索与合作，拥有丰富的企业资源储备，与上千家新三板企业建立了良好的合作关系。目前的客户资源涵盖新三板挂牌企业、拟挂牌企业及境内外IPO企业，在业内树立了良好的品牌，客户认可度和粘性高。清大金服在推荐挂牌、持续督导、并购重组、投融资等领域经验丰富；拥有财务、法律及行业方面专业背景的优秀团队。
                                        </p>
                                    </section>
                                </td>
                                <td>
                                    <div className="pic">
                                        <img src="./src/images/qdjf_image.png" alt=""/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="service_title title_hexinyewu">
                    <h1>核心业务</h1>
                </div>

                <div className="service_content" style={{height:'260px'}}>
                    <table className="service-table">
                        <tr>
                            <td style= {{borderRight:'2px solid #000000'}}>
                                <section>
                                    <p style={{textAlign:'left'}}>
                                        <li>● 挂牌辅导</li>
                                        <li>● 股份制改造</li>
                                        <li>● 挂牌申报文件准备</li>
                                        <li>● 挂牌后持续督导</li>
                                    </p>
                                </section>
                            </td>
                            <td style= {{borderRight:'2px solid #000000'}}>
                                <section>
                                    <p style={{textAlign:'left'}}>
                                        <li>● 财务顾问业务</li>
                                        <li>● 定向增发</li>
                                        <li>● 股权质押方案设计</li>
                                        <li>● 并购重组方案设计</li>
                                        <li>● 私募债发行与承销</li>
                                    </p>
                                </section>
                            </td>
                            <td>
                                <section style={{textAlign:'left',width:'400px',paddingLeft:'10px'}}>
                                    <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>股权投资业务</h4>
                                    <p>
                                        协助企业融资、优化企业资本结构；合理利用财务杠杆提高股东的回报率；帮助企业提高现金流管理水平；利用全国乃至全球性的资源网络，帮助企业寻找合适的并购对象；实现企业的跨越式发展；利用投资人资源，协助企业在研发、生产和市场等方面进行全面拓展。
                                    </p>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="service_title title_hexintuandui">
                    <h1>核心团队</h1>
                </div>

                <div className="service_content" style={{height:'400px'}}>
                    <table className="service-table" style={{width:'1000px'}}>
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdjf_hxdd.png" alt=""/>
                                </div>
                            </td>
                            <td>
                                <section style={{textAlign:'left',width:'400px'}}>
                                    <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>我们拥有一支具备国际视野的专业金融服务团队</h4>
                                    <p>
                                        团队成员多毕业于清华、复旦以及交大等国内著名学府，拥有留美、法、英等海外留学及从业经历；曾工作于国内知名券商、国际“四大”会计师事务所，以及红杉、鼎晖等私募基金；建立了包含财务、法律、行业等方面的复合型人才的专家团队，为中小型企业提供专业化、多元化的财务顾问及投融资服务。
                                    </p>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="service_title title_anlizhanshi">
                    <h1>案例展示</h1>
                </div>

                <div className="service_content" style={{height:'360px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdjf_al.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
