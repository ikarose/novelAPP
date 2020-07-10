import React,{Component} from "react"

import {connect} from "react-redux"

@connect((state)=>({...state}))

export default class Head extends Component{
    render(){
        return (
            <header className="head">
                <span>{this.props.headTitle}</span>
            </header>
        )
    }
} 





