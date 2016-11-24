import React from 'react'


export default class Collaborator extends React.Component {
    constructor(props) {
        super(props)
    }
    slideCollaborator = function(){
        var slider = $('#collaborator').bxSlider({
            pager:false,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 800,
            slideMargin: 76,
            infiniteLoop:false,
            controls: false
        });

        $('.collaborator_prev').click(function(){
            slider.goToPrevSlide();
            return false;
        });

        $('.collaborator_next').click(function(){
            slider.goToNextSlide();
            return false;
        });
    }
    componentDidMount() {
        this.slideCollaborator();
    }
    render() {

        return (
            <div className="collaborator-index">
                <div className="container container-arrow">
                    <div className="bx-wrapper" style={{maxWidth: 1052, margin: '0px auto'}}>
                        <div className="bx-viewport"
                             style={{width: '100%', overflow: 'hidden', position: 'relative', height: 240}}>
                            <ul className="bxslider " id="collaborator">
                                <li>
                                    <img width="800px" src="./src/images/collaborator1.png" alt=""/>
                                </li>
                                <li>
                                    <img width="800px" src="./src/images/collaborator2.png" alt=""/>
                                </li>
                                <li>
                                    <img width="800px" src="./src/images/collaborator3.png" alt=""/>
                                </li>
                                <li>
                                    <img width="800px" src="./src/images/collaborator4.png" alt=""/>
                                </li>
                                <li>
                                    <img width="800px" src="./src/images/collaborator5.png" alt=""/>
                                </li>
                            </ul>
                        </div>
                        <div className="bx-controls bx-has-controls-direction">
                            <div className="bx-controls-direction">
                                <a className="bx-prev collaborator_prev">
                                    <span className="icon icon-prev"></span>
                                </a>
                                <a className="bx-next collaborator_next">
                                    <span className="icon icon-next"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
