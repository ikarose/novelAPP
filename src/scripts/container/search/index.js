import React,{Component} from "react";
import axios from "axios";
import {getHotword} from "../../actions";
import {Link,router,browserHistory} from "react-router";
import {connect} from "react-redux";

@connect((state)=>({...state}))


export default class Wechat extends Component{

    componentWillMount(){
        const {dispatch,flag} = this.props;
        dispatch(getHotword(dispatch,"/hotword"));
    }

    render(){
        const {hotWord,dispatch} = this.props;
        return (
            <div className="search">
                <div className="search-top">
                    <div className="search-inner">
                        <i className="iconfont input-left">&#xe699;</i>
                        <input type="text" className="search-input" placeholder="输入作者或书名" /> 
                        <i className="iconfont input-right">&#xe646;</i>
                    </div>
                    <button>搜索</button>
                </div>
                <div className="search-bottom">
                    <h1 className="search-title">搜索热词:</h1>
                    <div className="search-block">
                        {
                            hotWord.map((item,idx)=>{
                                return  <div className="blocks" key={idx}>
                                            <Link to={`/book/${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </div>
                            })
                        }
                        <div className="blocks green" onClick={()=>{dispatch(getHotword(dispatch,"/hotword"))}}>换一换</div>
                    </div>
                </div>


            </div>
        )
    }
} 