import React,{Component} from "react"
import axios from "axios";
import {getMale,pushName} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router";

@connect(state=>({...state}))

export default class Wechat extends Component{

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getMale(dispatch,"/getMale"));
    }

    render(){
        const {male,dispatch} = this.props;
        return (
            <div className="recommend">
                <div className="recommend-nav">
                    <div className="nav-title active-nav">最热</div>
                    <div className="nav-title">男频</div>
                    <div className="nav-title">女频</div>                    
                </div>
                <ul className="recommend-body">
                    {
                        male.map((item,id)=>{
                            return  <li key={id} onClick={()=>dispatch(pushName(item.name))}>
                                        <Link to={`/book/${item.id}`} >
                                            <div>
                                                <img src={"http://"+item.cover} />
                                            </div>
                                            <dl>
                                                <dt>{item.name}</dt>
                                                <dd>作者:{item.author}</dd>
                                                <dd>简介:{item.info}</dd>
                                            </dl>
                                        </Link>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
} 