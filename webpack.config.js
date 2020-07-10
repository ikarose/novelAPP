var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:["babel-polyfill","./src/scripts/index"],
    devtool:"source-map",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",
        publicPath:"/"
    },
    module:{
        rules:[
            {
                test:/\.js[x]?$/,
                use:["babel-loader"],
                exclude:[path.resolve(__dirname,'node_modules')]
            },
            {
                test:/\.(css|scss)$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader",{
                        loader:"postcss-loader",
                        options:{
                            plugins:function(){
                                return [
                                    require("cssgrace"),
                                    require("postcss-px2rem")({remUnit:108}),
                                    require("autoprefixer")(),
                                ]
                            }
                        }
                    },"sass-loader"]
                })
            },
            {
                test:/\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                use:["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"]
            }
        ]
    },
    devServer:{//配置服务器
        contentBase:path.join(__dirname,"dist"),//服务期目录
        compress:true,
        hot:true,
        host:"0.0.0.0",
        port:4396,
        publicPath:"/",
        historyApiFallback: true,
        disableHostCheck: true,
    },
    plugins:[
        new OpenBrowserWebpackPlugin({url:"http://localhost:4396"}),
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            inject:true        
        }),
        new ExtractTextWebpackPlugin({
            filename:"[name].[hash].css",
            allChunks:true,
            disable:false
        }),
        new webpack.HotModuleReplacementPlugin(),
        
    ]
}





