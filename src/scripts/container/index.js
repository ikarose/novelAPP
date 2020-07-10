import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {Redirect,Router,Route,hashHistory, IndexRedirect, IndexRoute} from "react-router";



import Home from "./home";
import Bookshelf from "./bookshelf";
import Recommend from "./recommend";
import Theme from "./theme";
import Category from "./category";
import Search from "./search";
import Detail from "./detail";
import List from "./list";
import Catelist from "./cateList"

export default class Layout extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Redirect from="/dist2" to="/" />
                <Route path="/" component={Home}>
                    <IndexRedirect to="/bookshelf" />
                    <Route path="bookshelf" component={Bookshelf}></Route>
                    <Route path="recommend" component={Recommend}></Route>
                    <Route path="theme" component={Theme}></Route>
                    <Route path="category" component={Category}></Route>
                    <Route path="search" component={Search}></Route>                    
                </Route>
                <Route path="/book/:id" component={Detail}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/catelist" component={Catelist}></Route>
            </Router>
        )
    }
}
