import React,{Component} from "react"
import axios from "axios";
import {getMybook, changeFlag} from "../../actions";
import {connect} from "react-redux";

@connect((state)=>({...state}))

export default class Wechat extends Component{
    componentWillMount(){
        const {dispatch,flag} = this.props;
        if(flag){
            dispatch(changeFlag());
            dispatch(getMybook(dispatch,"/mybook"));
        }
    }

    render(){
        const {myBook} = this.props;
        return (
            <div className="bookshelf">
                <ul>
                    {
                        myBook.map((item,idx)=>{
                            return  <li key={idx}>
                                        <div>
                                            <img src={"http://"+item.cover} />
                                            <div className="hide"><i className="iconfont">&#xe647;</i></div>
                                        </div>
                                            
                                        <dl>
                                            <dt>{item.name}</dt>
                                            <dd>{item.info}</dd>
                                        </dl>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
} 