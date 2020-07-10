var initState = {
    footList:[
        {path:"/bookshelf",txt:"我的书架",icon:"\ue72d"},
        {path:"/recommend",txt:"推荐",icon:"\ue600"},
        {path:"/theme",txt:"主题",icon:"\ue67a"},
        {path:"/category",txt:"分类",icon:"\ue649"},        
        {path:"/search",txt:"搜索",icon:"\ue699"}
    ],
    headTitle:"我的书架",
    myBook:[],
    flag:true,
    hotWord:[],
    cateMale:[],
    cateFemale:[],
    cateSocial:[],
    theme:[
        {url:"ilemi.cn:8080/reader/cover.action?picsize=small&id=0000000500050009&topspot=1",txt:"这些年我们追过的玄幻"},
        {url:"ilemi.cn:8080/reader/cover.action?picsize=small&id=0000000500050014&topspot=1",txt:"女主重生逆袭的小说"},
        {url:"ilemi.cn:8080/reader/cover.action?picsize=small&id=0000000500050010&topspot=1",txt:"穿越时空的爱恋"},
        {url:"ilemi.cn:8080/reader/cover.action?picsize=small&id=0000000500050017&topspot=1",txt:"科幻未来，机甲时代"},
        {url:"ilemi.cn:8080/reader/cover.action?picsize=small&id=0000000500050019&topspot=1",txt:"凡人没事修修仙"},
        {url:"ilemi.cn:8080/reader/cover.action?picsize=small&id=0000000500050012&topspot=1",txt:"YY有理，异能无限"},
        {url:"ilemi.cn:8080/reader/cover.action?picsize=small&id=0000000500050011&topspot=1",txt:"穿越古代，指点江山"}        
    ],
    male:[],
    hot:[],
    detail:[],
    bookName:"",
    more:[],
    themeHead:[],
    theme01:[],
    cateList:[]
}

export default (state=initState,action)=>{
    switch(action.type){
        case "changeTitle":
        state.headTitle = action.title;
        return Object.assign({},state);
        break;

        case "getMyBook":
        state.myBook = action.preload;
        return Object.assign({},state);
        break;

        case "changeflag":
        state.flag = !state.flag;
        return Object.assign({},state);
        break;

        case "getHotWord":
        state.hotWord = action.preload;
        return Object.assign({},state);
        break;

        case "getcate":
        var arr = [];
        arr = action.preload;
        state.cateMale = arr.slice(0,13);
        state.cateFemale = arr.slice(19,31);
        state.cateSocial = arr.slice(13,19);
        return Object.assign({},state);
        break;

        case "getmale":
        state.male = action.preload;
        return Object.assign({},state);
        break;

        case "getdetail":
        state.detail = action.preload;
        return Object.assign({},state);        
        break;

        case "pushname":
        state.bookName = action.name;
        return Object.assign({},state);
        break;

        case "getmore":
        state.more = action.preload;
        return Object.assign({},state);
        break;

        case "changeTheme":
        state.themeHead = action.theme;        
        return Object.assign({},state);
        break;

        case "gettheme":
        state.theme01 = action.preload;      
        return Object.assign({},state);
        break;

        case "getcatelist":
        state.cateList = action.preload;
        return Object.assign({},state);
        break;

        default:
        return Object.assign({},state);
        break;
    }
}



