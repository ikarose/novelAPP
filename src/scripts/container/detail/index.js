import React,{Component} from "react"
import axios from "axios";
import {connect} from "react-redux";
import {Link,router,browserHistory} from "react-router";
import {getDetail,pushName,getMore} from "../../actions";

import Subhead from "../../components/subHead.js";

@connect(state=>({...state}))

export default  class Detail extends Component{

    constructor(props){
        super(props)
    }

    turnTo=(id)=>{
        this.props.router.push("/");
        setTimeout(()=>{
            this.props.router.replace("/book/"+id);
        })
    }

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getDetail(dispatch,this.props.location.pathname.split("/")[2]));
        dispatch(getMore(dispatch,"/getmore"));
    }

    render(){
        const {detail,more} = this.props;
        var item;
        var that = this;
        if(detail.length>0){
            item=
                <div className="detail">
                    <Subhead title={detail[0].name} route={this.props.router}></Subhead>
                    <div className="detail-inner">
                        <div className="detail-top">
                            <div className="detail-top-inner">
                                <img src={`http://${detail[0].cover}`}/>
                                <dl>
                                    <dd>类型:&nbsp;&nbsp;{detail[0].type}</dd>
                                    <dd>作者:&nbsp;&nbsp;<b>{detail[0].author}</b></dd>
                                    <dd>大小:&nbsp;&nbsp;827 KB</dd>
                                    <dd>来源:&nbsp;&nbsp;网络</dd>                                    
                                </dl>
                            </div>
                        </div>
                        <div className="intro">
                            <div className="intro-inner">
                                <h2>简介:</h2>
                                <p>{detail[0].info}</p>
                            </div>
                        </div>
                        <div className="seeMore">
                            <p>看本书的人还在看:</p>
                            <div className="more">
                                {
                                    more.map((item,i)=>{
                                        return  <dl className="more-inner" key={i} onClick={()=>{that.turnTo(item.id)}}>
                                                        <dt><img src={`http://${item.cover}`}/></dt>
                                                        <dd>{item.name}</dd>
                                                </dl>
                                    })
                                }
                            </div>
                        </div>
                        <div className="download">
                                开始下载
                        </div>
                    </div>
                </div>
        }else{
            item=""
        }

        return(
            <div className="detail-wrapper">
                {item}
            </div>
        )
    }
}






