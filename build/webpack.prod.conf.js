const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        filename: "js/[name].[chunkhash:16].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                framework: {
                    test: "framework",
                    name: "framework",
                    enforce: true
                }
            }
        }
    }
})