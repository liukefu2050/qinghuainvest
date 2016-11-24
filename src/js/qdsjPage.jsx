import React from 'react'

export default class QdsjPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div className="service_content" style={{height:'460px'}}>
                    <div style={{height:30}}></div>
                    <table className="service-table" style={{width:'1060px'}}>
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdsj_logo.png" alt=""/>
                                </div>
                                <section style={{paddingTop: '30px',width: '400px'}}>
                                    <p>
                                        基于互联网思维，走从活动到咨询再到投资价值链式的路径；做有态度的、有内容的、圈层化的、共享互利式的研究型社群及产融对接型的综合金融信息及数据服务方。旗下服务内容：海外商务考察、海外投融资并购、新三板企业实操培训、清大国际旅行社等全产业链服务。
                                    </p>
                                </section>
                            </td>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdsj_image.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="service_title title_hexinyewu">
                    <h1>核心业务</h1>
                </div>

                <div className="service_content" style={{height:'400px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <section>
                                    <p >
                                        <li>● 高端定制培训</li>
                                        <li>● 融资路演服务</li>
                                        <li>● 海外考察对接</li>
                                        <li>● 投研并购咨询</li>
                                        <li>● 行业评选活动</li>
                                        <li>● 教练式私董会</li>
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

                <div className="service_content" style={{height:'600px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdsj_hxdd.png" alt=""/>
                                </div>
                            </td>
                            <td>
                                <section style={{textAlign:'left'}}>
                                    <p>
                                        <h4>董事长 朱高峰</h4>
                                        <li>场外数据库(上海)信息技术有限公司董事长</li>
                                        <li>曾任中国银联旗下银联智惠研究院总经理</li>
                                        <li>上海决策者经济顾问有限公司(837621)合伙人、总裁</li>
                                        <li>法学学士 市场营销硕士学位</li>
                                        <li>历游30多国，踏行40万公里。</li>
                                        <li>熟稔实业、识金融、通并购、国际化。</li>
                                    </p>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="service_title title_anlizhanshi">
                    <h1>案例展示</h1>
                </div>

                <div className="service_content" style={{height:'500px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdsj_alzs.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
