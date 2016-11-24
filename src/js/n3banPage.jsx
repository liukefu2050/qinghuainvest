import React from 'react'

export default class N3banPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div style={{height:'1400px'}}>
                    <div style={{height:30}}></div>
                    <div className="service_content">
                        <table className="service-table" style={{width:'1100px'}}>
                            <tr>
                                <td style={{verticalAlign:'top',width:'500px'}}>
                                    <div className="pic">
                                        <img src="./src/images/n3ban1.png" width="400px" alt=""/>
                                    </div>
                                    <section style={{padding: '50px'}}>
                                        <p style={{textAlign:'left'}}>
                                            “牛三板”品牌取自“New（新）三板”的音译，是清大集团旗下互联网知名品牌，凤凰财经、中证网、和讯、澎湃、新浪财经、网易等知名媒体均有牛三板及其相关特色产品的报道。公司也举办了多次主题沙龙活动，得到挂牌企业和机构名家的认可。2016年，清大集团通过清大软件、清大传媒、清大数据、清大金融整体布局，围绕新三板市场，专注于为市场参与者提供线上线下的整合服务，计划打造自己的生态圈。
                                        </p>
                                    </section>
                                </td>
                                <td>
                                    <div className="pic">
                                        <img src="./src/images/n3ban2.png" alt=""/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="pic">
                                        <img src="./src/images/n3ban_db.png" width="921px" height="921px" alt=""/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="service_content">
                    <table className="service-table" style={{width:'1100px'}}>
                        <tr>
                            <td style={{verticalAlign:'top',width:'500px'}}>
                                <section>
                                    <h1 style={{paddingBottom:'20px'}}>牛三板移动金融终端</h1>
                                    <p style={{textAlign:'left'}}>
                                        为新三板参与者提供的移动金融信息服务终端，通过市场参与者深度特色数据库，实现挂牌、投融资、专家顾问等资源高效对接。通过专业开发的新三板选投模型，指导投资者操盘实践。
                                    </p>
                                </section>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </table>
                </div>
                <div style={{height:'1534px',background:'url("./src/images/n3ban_bg.png") center top no-repeat'}}>
                    <div className="pic">
                        <img src="./src/images/n3ban_tu.png" style={{display:'block',margin:'0 auto'}} width="1245px"
                             height="1461px" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
