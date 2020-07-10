import "./utils/flexible.js";
import "../style/index.scss";
import Layout from "./container";
import React from "react"
import {render} from "react-dom"
import store from "./store"
import {Provider} from "react-redux"




var hotRender = ()=>{
    render(
       <Provider store={store}>
            <Layout className="inner"/>
       </Provider>,
        wrapper
    )
}

hotRender();

