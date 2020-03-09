'use strict'
const path = require('path');
const APP_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');
module.exports = {
    entry: {
        app: './src/index.js',
        framework: ['react', 'react-dom'],
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
                use: 'url-loader?limit=8129',
                //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // outputPath:'../',//输出**文件夹
                        publicPath: '/',
                        name: "images/[name].[ext]",
                        limit: 500  //是把小于500B的文件打成Base64的格式，写入JS
                    }
                }]
            }
        ]
    }
}