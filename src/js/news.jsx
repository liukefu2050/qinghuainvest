import React from 'react'
//import 'whatwg-fetch'
import moment from '../../js/moment'

export default class QingDaNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list1: [],
            list2: [],
            list3: []
        }
    }

    // 获取新闻
    fetchNews(type, url){
/*        fetch(url)
            .then((res) => {
                //console.log(res.status);
                return res.json()
            })
            .then((data) => {
                //console.log(data.page.datas);
                if (type == 1) {
                    this.setState({list1: data.page.datas})
                } else if (type == 2) {
                    this.setState({list2: data.page.datas})
                } else if (type == 3) {
                    this.setState({list3: data.page.datas})
                }
            })
            .catch((e) => {
                //console.log(e.message)
            })*/
        $.getJSON(url, function(data) {
            if (type == 1) {
                this.setState({list1: data.page.datas})
            } else if (type == 2) {
                this.setState({list2: data.page.datas})
            } else if (type == 3) {
                this.setState({list3: data.page.datas})
            }
        }.bind(this));
    }

    componentDidMount() {
        var url1 = "./web/message/pagelist?type=001-001&rows=4";
        var url2 = "./web/message/pagelist?type=001-002&rows=4";
        var url3 = "./web/message/pagelist?type=001-003&rows=4";
/*        var url1 = "./json/news1.json";
        var url2 = "./json/news2.json";
        var url3 = "./json/news3.json";*/
        this.fetchNews(1, url1);
        this.fetchNews(2, url2);
        this.fetchNews(3, url3);
    }

    buildNews(list) {
        var newsList = list.map(function (item, key) {
            return (
                <li key={key}>
                    <div className="date">
                        <div className={'circle circle'+key}>
                            <b>{item.createTime.date}</b>
                            {moment(new Date(item.createTime.time)).format('YYYY-MM')}
                        </div>
                    </div>
                    <div className="cnt">
                        <strong><a href={item.linkAddress} target="_blank">{item.title}</a></strong>
                        <p>{item.content}</p>
                        <div className="operate">
                            <a href={item.linkAddress} className="more" target="_blank">阅读全文 &gt;&gt;</a>
                        </div>
                    </div>
                </li>
            )
        })

        return newsList;
    }

    render() {
        var newsList1 = this.buildNews(this.state.list1);
        var newsList2 = this.buildNews(this.state.list2);
        var newsList3 = this.buildNews(this.state.list3);
        return (
            <div className="banner block-news">
                <div className="container container-arrow">
                    <div className="block-header clearfix">
                        <h3 className="t-style-1 text-blank" style={{width:'240px',height: '120px'}}>
                            清大动态
                            <span className="arrow arrow-sm-2"></span>
                        </h3><a name="news" className="anchor"></a>
                        <ul role="tablist">
                            <li role="presentation" className="active">
                                <a href="#news1" aria-controls="latest-activities"
                                   role="tab" data-toggle="tab">培训
                                    <span className="arrow arrow-sm-1"></span></a>
                            </li>
                            <li role="presentation">
                                <a href="#news2" aria-controls="latest-activities" role="tab"
                                   data-toggle="tab">海外考察
                                    <span className="arrow arrow-sm-1"></span></a>
                            </li>
                            <li role="presentation">
                                <a href="#news3" aria-controls="latest-knowledges"
                                   role="tab" data-toggle="tab">投融资对接会
                                    <span className="arrow arrow-sm-1"></span></a>
                            </li>
                        </ul>
                    </div>
                    <ul className="list-news tab-pane active" id="news1"
                        data-ie="first-child" role="tabpanel">
                        {newsList3}
                    </ul>
                    <ul className="list-news tab-pane" id="news2" data-ie="first-child" role="tabpanel">
                        {newsList1}
                    </ul>
                    <ul className="list-news tab-pane" id="news3" data-ie="first-child" role="tabpanel">
                        {newsList2}
                    </ul>
                    <span className="arrow arrow-4 arrow-left"></span>
                    <div className="bg-gary"></div>
                </div>
                <div className="bg-warning-light"></div>

            </div>
        )
    }
}
