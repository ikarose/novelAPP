import React,{Component} from "react"
import axios from "axios";
import {getCate} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router";

@connect((state)=>({...state}))

export default class Wechat extends Component{

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getCate(dispatch,"/getcate"));
    }

    render(){
        const {cateMale,cateFemale,cateSocial} = this.props;
        return (
            <div className="category">
                <div className="male channel">
                    <div className="channel-head">
                        <i className="iconfont">&#xe73d;</i><span className="channel-title">男频</span>
                    </div>
                    <div className="channel-body">
                            {
                                cateMale.map((item,idx)=>{
                                    return  <div className="channel-blocks" key={idx}>
                                                <Link to="/catelist">
                                                    {item.name}
                                                </Link>
                                            </div>
                                })
                            }
                    </div>
                </div>
                <div className="female channel">
                    <div className="channel-head">
                        <i className="iconfont">&#xe73e;</i><span className="channel-title">女频</span>
                    </div>
                    <div className="channel-body">
                        {
                            cateFemale.map((item,idx)=>{
                                return  <div className="channel-blocks" key={idx}>
                                            <Link to="/catelist">
                                                {item.name}
                                            </Link>
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div className="social channel">
                    <div className="channel-head">
                        <i className="iconfont">&#xe602;</i><span className="channel-title">社科文学</span>
                    </div>
                    <div className="channel-body">
                        {
                            cateSocial.map((item,idx)=>{
                                return  <div className="channel-blocks" key={idx}>
                                            <Link to="/catelist">
                                                {item.name}
                                            </Link>
                                        </div>
                            })
                        }
                    </div>
                </div>                
            </div>
        )
    }
} 