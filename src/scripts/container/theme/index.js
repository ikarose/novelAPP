import React,{Component} from "react"
import {connect} from "react-redux";
import {changeTheme} from "../../actions";
import {Link} from "react-router";

@connect((state)=>({...state}))

export default class Wechat extends Component{

    render(){
        const {theme,dispatch} = this.props;
        return (
            <div className="theme">
                {
                    theme.map((item,id)=>{
                        return  <div className="theme-blocks" key={id} onClick={()=>dispatch(changeTheme(item.txt))}>
                                    <Link to="/list">
                                        <img src={"http://"+item.url}/>
                                    </Link>
                                </div>
                    })
                }
            </div>
        )
    }
} 