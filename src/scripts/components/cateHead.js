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
        route.push("/category");
    }

    render(){
        var that = this;
        const {themeHead} = this.props;
        return (
            <header className="cateHead">
                <div>
                    <i className="iconfont" onClick={()=>{that.goback()}}>&#xe675;</i>
                </div>
            </header>
        )
    }
} 