import React from 'react'
import QingDaNews from './news.jsx'
export default class DynamicPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="banner">
                <div className="title_dynamic">
                    <div className="banner">
                        <img width="100%" height="560px" src="./src/images/dynamic_title.png"/>
                    </div>
                    <div style={{marginTop:'-100px'}}>
                        <QingDaNews/>
                    </div>
                </div>
            </div>
        )
    }
}
