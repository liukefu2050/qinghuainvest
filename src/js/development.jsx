import React from 'react'

export default class DevelopPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="develop_bg">
                <div className="service_title_box" style={{paddingTop:'150px'}}>
                    <img src="./src/images/licheng.png" alt=""/>
                </div>
                <div className="service_title_box" style={{height:'96px',marginTop:'50px',marginBottom:'50px'}}>
                    <img src="./src/images/blue_title.png" alt=""/>
                </div>
                <div className="service_content" >
                    <table className="guide-table">
                        <tr>
                            <td>
                                <div style={{width:'100'}}>
                                    <li className="guide_step" style={{marginTop:'80px'}}>
                                        <img src="./src/images/11.png" alt=""/>
                                    </li>
                                    <li className="guide_line">
                                        <img src="./src/images/1.png" alt=""/>
                                    </li>
                                    <li className="guide_step">
                                        <img src="./src/images/21.png" alt=""/>
                                    </li>
                                    <li className="guide_line">
                                        <img src="./src/images/2.png" alt=""/>
                                    </li>
                                    <li className="guide_step">
                                        <img src="./src/images/31.png" alt=""/>
                                    </li>
                                    <li className="guide_line">
                                        <img src="./src/images/3.png" alt=""/>
                                    </li>
                                    <li className="guide_step">
                                        <img src="./src/images/41.png" alt=""/>
                                    </li>
                                    <li className="guide_line">
                                        <img src="./src/images/4.png" alt=""/>
                                    </li>
                                    <li className="guide_step">
                                        <img src="./src/images/51.png" alt=""/>
                                    </li>
                                    <li className="guide_line">
                                        <img src="./src/images/5.png" alt=""/>
                                    </li>
                                </div>
                            </td>
                            <td>
                                <div className="guide_content guide_content_box1" >
                                    <section>
                                        <h1>2012</h1>
                                        <p style={{textAlign:'left',width:'430px'}}>
                                            <li>辅导推荐挂牌业务启动</li>
                                            <li>华东政法大学研究生培养基地</li>
                                        </p>
                                    </section>
                                </div>

                                <div className="guide_content guide_content_box2" >
                                    <section>
                                        <h1>2013</h1>
                                        <p style={{textAlign:'left',width:'430px'}}>
                                            <li>战略咨询服务</li>
                                            <li>投融资服务</li>
                                        </p>
                                    </section>
                                </div>

                                <div className="guide_content guide_content_box3" >
                                    <section>
                                        <h1>2014</h1>
                                        <p style={{textAlign:'left',width:'430px'}}>
                                            <li>挂牌企业融资路演</li>
                                            <li>主办中国财会论坛</li>
                                            <li>《清华金融评论》理事机构</li>
                                        </p>
                                    </section>
                                </div>


                                <div className="guide_content guide_content_box4" >
                                    <section>
                                        <h1>2015</h1>
                                        <p style={{textAlign:'left',width:'430px'}}>
                                            <li>中国“创客杯”新三板评选</li>
                                            <li>互联网产品牛三板上线</li>
                                            <li>牛三板视频点映会</li>
                                            <li>并购重组服务</li>
                                        </p>
                                    </section>
                                </div>


                                <div className="guide_content guide_content_box5" >
                                    <section>
                                        <h1>2016</h1>
                                        <p style={{textAlign:'left',width:'430px'}}>
                                            <li>香港金融管理学院</li>
                                            <li>新三板学院成立</li>
                                            <li>香港金融管理学院</li>
                                            <li>区块链创新学院成立</li>
                                            <li>国际并购及考察启动</li>
                                            <li>牛三板综合平台成立</li>
                                            <li>第二届“创客杯”评选启动</li>
                                        </p>
                                    </section>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        )
    }
}
