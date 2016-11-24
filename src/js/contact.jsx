import React from 'react'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <di>
                <div className="service_content">
                    <table className="service-table" style={{width:'1100px',height:'480px'}}>
                        <tr>
                            <td>
                                <div className="pic">
                                    <img src="./src/images/address.png" width="500px" alt=""/>
                                </div>
                                <div style={{height:'50px',lineHeight:'50px'}}>
                                    <a href="http://j.map.baidu.com/YNe6F" target="_blank">打开地图</a>
                                </div>
                            </td>
                            <td>
                                <section style={{textAlign:'left'}}>
                                    <p>
                                        <h4>运营总部</h4>
                                        <li>地址：上海市静安区万航渡路888号开开大厦18F</li>
                                        <li>电话：+86 21 6252 0333</li>
                                        <li>邮箱：<a href="mailto:qinghuainvest@qinghuainvest.com">qinghuainvest@qinghuainvest.com</a></li>
                                        <li>网站：<a href="http://www.new3band.com" target="_blank">www.new3band.com</a></li>
                                    </p>
                                </section>

                                <section style={{textAlign:'left'}}>
                                    <p>
                                        <h4>北京公司</h4>
                                        <li>地址：北京市海淀区中关村东路1号院清华大学科技园创业大厦10楼</li>
                                        <li>电话：+86 10 5272 5311</li>
                                        <li>邮箱：<a href="mailto:qinghuainvest@qinghuainvest.com">qinghuainvest@qinghuainvest.com</a></li>
                                        <li>网站：<a href="http://www.qinghuainvest.com" target="_blank">www.qinghuainvest.com</a></li>
                                    </p>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>
            </di>
        )
    }
}
