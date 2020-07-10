import React,{Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {changeTitle} from "../actions";
@connect(
    (state)=>({...state})
)

export default class Foot extends Component{
    render(){
        const {dispatch} = this.props;
        return(
            <div className="foot">
                {
                    this.props.footList.map((item,d)=>{
                        return (
                            <Link key={d} to={item.path} activeClassName="active" onClick={()=>dispatch(changeTitle(item.txt))}>
                                <i className={"iconfont"}>{item.icon}</i>
                                <span>{item.txt}</span>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
