import React from 'react'

export default class Bottom extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {

        return (
            <footer style={{width:'100%',height:'100px'}}>
                <div className="bottom-content">
                    <div style={{marginLeft:'15%',paddingTop:'30px',textAlign:'left',float:'left'}}>
                        地址：上海市静安区万航渡路888号开开广场18楼AB座<br/><br/>
                        电话：021-62520333<a name="contact_us"></a>
                    </div>
                    <div style={{marginLeft:'13%',textAlign:'left',float:'left',paddingTop:'25px'}}>
                        <img src="./src/images/service_tel.png"/>
                    </div>
                </div>
            </footer>
        )
    }
}
