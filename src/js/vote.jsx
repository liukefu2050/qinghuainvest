import React from 'react'
import {Row, Col, Checkbox, Card,Button } from 'antd';

export default class Vote extends React.Component {
    constructor(props) {
        super(props)
    }

    onChange = () => {

    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <div className="banner">
                    <img width="100%" src="./src/images/vote_bg.png"/>
                </div>
                <div className="banner">
                    <div className="gutter-example">
                        <Row gutter={16} className="cardRow">
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">

                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">

                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">

                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">

                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="gutter-example">
                        <Row gutter={16} className="cardRow">
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">

                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">

                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">

                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card title="Top 1" extra={<span>正泰集团</span>} style={{ width: 300 }}>
                                    <div className="cardContent">
                                        <p>正泰集团产品覆盖高低压电器、输配电设备、仪器仪表、工业自动化、建筑电器、光伏电池及组件系统和汽车电器等产业，产品畅销世界90多个国.
                                        </p>
                                    </div>
                                    <div className="cardContentLink"><a>[详细介绍]</a></div>
                                    <Row className="voteRow">
                                        <Col span={12} style={{marginTop: '20px'}}>
                                            投票<input type="checkbox" name="voteCheck"/>
                                        </Col>
                                        <Col span={12} className="R">
                                            
                                        </Col>
                                    </Row>
                                    <div className="line">
                                        <div className="solidLine"></div>
                                        <div className="dottedLine"></div>
                                    </div>
                                    <span className="clear"></span>
                                    <Row className="voteDataRow">
                                        <Col span={12} className="C">
                                            票数：19
                                        </Col>
                                        <Col span={12} className="C">
                                            人气数：256
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="BtnRow">
                        <Button type="ghost">提交投票</Button>
                        <Button type="ghost">重新选择</Button>
                    </div>
                </div>
            </div>
        )
    }
}
