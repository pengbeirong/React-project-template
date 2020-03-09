const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: "js/[name].[hash:16].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            minify: {
                html5: true
            },
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: '8080',
        contentBase: path.join(__dirname, '../src'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        open: true,
        proxy: {}
    }
})