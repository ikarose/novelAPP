import React,{Component} from "react"
import {connect} from "react-redux";
import {Link,browserHistory} from "react-router";

@connect(state=>({...state}))

export default class subHead extends Component{

    constructor(props){
        super(props)
    }

    goback=()=>{
        const {route} = this.props;
        route.push("/recommend");
    }

    render(){
        var that = this;
        const {title} = this.props;
        return (
            <header className="subHead">
                <div>
                    <i className="iconfont" onClick={()=>{that.goback()}}>&#xe675;</i>
                    <span>{title}</span>
                </div>
            </header>
        )
    }
} 