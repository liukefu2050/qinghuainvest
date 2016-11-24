import React from 'react'
export default class QingDaService extends React.Component {
    constructor(props) {
        super(props)
    }

    slideService() {
        var $slide_service = $('#j_slide_service');
        var slider = $('#j_slide_service').bxSlider({
            pager:true,
            minSlides: 3,
            maxSlides: 3,
            moveSlides:1,
            slideWidth: 300,
            slideMargin: 76,
            controls: false,
            infiniteLoop:false,
            onSliderLoad:function(){
                $slide_service.parent().height(400);
            }
        });

        $('.bx-prev').click(function(){
            slider.goToPrevSlide();
            return false;
        });

        $('.bx-next').click(function(){
            slider.goToNextSlide();
            return false;
        });
    }

    componentDidMount() {
        this.slideService();
    }

    render() {

        return (
            <div className="service-index">
                <div className="container container-arrow">
                    <div className="bx-wrapper" style={{maxWidth: 1052, margin: '0px auto'}}>
                        <div className="bx-viewport"
                             style={{width: '100%', overflow: 'hidden', position: 'relative', height: 380}}>
                            <ul className="bxslider " id="j_slide_service">
                                <li className="bx-clone">
                                    <div className="bx-shadow">
                                        <div className="pic">
                                            <img src="./src/images/newsanban.png" alt="牛三板"/>
                                        </div>
                                        <div className="cnt">
                                            <h4>牛三板<br/><span className="icon icon-horizontal-1"></span></h4>
                                            <p>新三板综合服务品牌，提供移动金融信息终端和会员体系服务，通过市场参与者尝试特色数据库，实现资源高效对接、提供投资者操作参考。</p>

                                            <a href="#/n3ban"
                                               className="btn-sm">
                                                <img src="./src/images/more_link.png"/>了解更多
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="bx-clone">
                                    <div className="bx-shadow">
                                        <div className="pic">
                                            <img src="./src/images/qingdajinfu.png" alt="清大金服"/>
                                        </div>
                                        <div className="cnt">
                                            <h4>清大金服<br/><span className="icon icon-horizontal-1"></span></h4>
                                            <p>资深金融服务团队，协助企业投资融资、推荐挂牌、持续督导、并购重组、股权激励等，同时从事股权投资业务。</p>
                                            <a href="#/qdjf"
                                               className="btn-sm">
                                                <img src="./src/images/more_link.png"/>了解更多
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="bx-clone">
                                    <div className="bx-shadow">
                                        <div className="pic">
                                            <img src="./src/images/soft.png" alt="清大软件"/>
                                        </div>
                                        <div className="cnt">
                                            <h4>清大软件<br/><span className="icon icon-horizontal-1"></span></h4>
                                            <p>金融信息数据团队，为资本市场监管机构、机构投资者、券商、挂牌企业等提供金融信息终端、资源对接平台、业务信息系统、金融数据库等服务。</p>
                                            <a href="#/qdrj"
                                               className="btn-sm">
                                                <img src="./src/images/more_link.png"/>了解更多
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="bx-clone">
                                    <div className="bx-shadow">
                                        <div className="pic">
                                            <img src="./src/images/service_qdsj.png" alt="清大数据"/>
                                        </div>
                                        <div className="cnt">
                                            <h4>清大数据<br/><span className="icon icon-horizontal-1"></span></h4>
                                            <p>有态度、有内容、圈层化、共享互利的研究型社群及产融对接型的综合金融信息及数据服务方，提供海外商务考察、投融资并购等服务。</p>
                                            <a href="#/qdsj"
                                               className="btn-sm">
                                                <img src="./src/images/more_link.png"/>了解更多
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="bx-clone">
                                    <div className="bx-shadow">
                                        <div className="pic">
                                            <img src="./src/images/service_qdcm.png" alt="清大传媒"/>
                                        </div>
                                        <div className="cnt">
                                            <h4>清大传媒<br/><span className="icon icon-horizontal-1"></span></h4>
                                            <p>成熟的品牌策划、影视制作服务团队，以传媒思维诠释金融，提供行情播报、专家点评、企业家专访等金融视频节目。</p>
                                            <a href="#/qdcm"
                                               className="btn-sm">
                                                <img src="./src/images/more_link.png"/>了解更多
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bx-controls bx-has-controls-direction">
                            <div className="bx-controls-direction">
                                <a className="bx-prev">
                                    <span className="icon icon-prev"></span>
                                </a>
                                <a className="bx-next">
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
