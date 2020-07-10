import React,{Component} from "react"
import axios from "axios";
import {connect} from "react-redux";
import {Link,router,browserHistory} from "react-router";
import {getTheme,pushName} from "../../actions";

import ThemeHead from "../../components/themeHead.js";

@connect(state=>({...state}))


export default class List extends Component{

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getTheme(dispatch,"/getTheme01"));
    }

    render(){
        const {theme01,dispatch} = this.props
        return(
            <div className="list">
                <ThemeHead route={this.props.router}></ThemeHead>
                <ul>
                    {
                        theme01.map((item,id)=>{
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

