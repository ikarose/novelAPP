import React,{Component} from "react"
import axios from "axios";
import {getCatelist,pushName} from "../../actions";
import {connect} from "react-redux";
import CateHead from "../../components/cateHead";
import {Link} from "react-router";

@connect((state)=>({...state}))

export default class CateList extends Component{

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getCatelist(dispatch,"/getCatelist"));
    }

    render(){
        const {dispatch,cateList} = this.props;
        return(
            <div className="catelist">
                <CateHead route={this.props.router}></CateHead>
                <ul>
                    {
                        cateList.map((item,id)=>{
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




