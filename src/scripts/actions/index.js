import axios from "axios";
axios.defaults.baseURL = "http://111.231.217.72:3000";

export function changeTitle(title){
    return{
        type:"changeTitle",
        title
    }
}

export function getMybook(dispatch,url){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getMyBook",preload:json});
        })
}

export function changeFlag(){
    return{
        type:"changeflag"
    }
}

export function getHotword(dispatch,url){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getHotWord",preload:json});
        })
}

export function getCate(dispatch,url){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getcate",preload:json});
        })
}

export function getMale(dispatch,url){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getmale",preload:json});
        })
}

export function getDetail(dispatch,id){
    return axios.get("/getDetail",{params:{'id':id}})
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getdetail",preload:json});
        })
}

export function pushName(name){
    return{
        type:"pushname",
        name
    }
}

export function getMore(dispatch,url){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getmore",preload:json});
        })
}

export function changeTheme(theme){
    return{
        type:"changeTheme",
        theme
    }
}

export function getTheme(dispatch,url){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"gettheme",preload:json});
        })
}

export function getCatelist(dispatch,url){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"getcatelist",preload:json});
        })
}

