import React,{Component} from "react";
import {Link} from "react-router";

import Head from "../../components/head.js";
import Foot from "../../components/foot.js";


export default class Home extends Component{
    render(){
        return(
            <div className="home">
                <Head></Head>
                <div key={this.props.children.pathname} className="inner">
                    {this.props.children}
                </div>
                <Foot></Foot>
            </div>
        )
    }
}


