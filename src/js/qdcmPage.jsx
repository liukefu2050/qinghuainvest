import React from 'react'

export default class QdcmPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div style={{height:'500px'}}>
                    <div style={{height:30}}></div>
                    <div className="service_content">
                        <table className="service-table" style={{width:'1100px'}}>
                            <tr>
                                <td style={{verticalAlign:'top'}}>
                                    <div className="pic">
                                        <img src="./src/images/qdcm_logo.png" alt=""/>
                                    </div>
                                    <section style={{padding: '50px'}}>
                                        <p>
                                            清大传媒是清大集团旗下的全资子公司，成立至今，是一个成熟的品牌策划、影视制作服务公司。现已拍摄过近千条宣传片，服务过各大区政府和各类型企业，坚持着用思想征服视界的理念，以专业的态度、高品质的服务，满足各类客户的需求。我们以传媒思维去诠释金融，现已拍摄过行情播报、电视金融栏目、专家采访等。清大传媒是金融与传媒的跨界结合体，是一个正在崛起的金融传媒平台。
                                        </p>
                                    </section>
                                </td>
                                <td>
                                    <div className="pic">
                                        <img src="./src/images/qdcm_image.png" alt=""/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="service_title title_hexinyewu">
                    <h1>核心业务</h1>
                </div>

                <div className="service_content" style={{height:'310px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <section>
                                    <p style={{textAlign:'left',width:'400px'}}>
                                        <li>●  广告片专题片创意制作</li>
                                        <li>●  电视栏目制作</li>
                                        <li>●  二维三维动画</li>
                                        <li>●  制作，品牌运营</li>
                                        <li>●  大型活动现场</li>
                                        <li>●  视频制作，直播执行</li>
                                        <li>●  高端定制培训 </li>
                                    </p>
                                </section>
                            </td>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdcm_hxyw.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="service_title title_hexintuandui">
                    <h1>核心团队</h1>
                </div>

                <div className="service_content" style={{height:'530px'}}>
                    <table className="service-table">
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/qdcm_hxdd.png" alt=""/>
                                </div>
                            </td>
                            <td>
                                <section style={{textAlign:'left',width:'400px',paddingLeft:"10px"}}>
                                    <h4 style={{fontWeight:'bold',lineHeight:'40px'}}>70后+90后，这就是我们的组合方程式</h4>
                                    <p>
                                        我们信仰和而不同，人人精熟于专业，团队优势互补，以广阔视野为客户寻找精准定位。我们发挥主观能动，保持对工作与新事物的学习热情，让心灵永远行走在潮流的最尖端。我们强调真诚感恩，善待、尊重、感恩身边的每个人，努力让自己成为于社会有益的人。
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
                                    <img src="./src/images/qdcm_alzs.png" alt=""/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
