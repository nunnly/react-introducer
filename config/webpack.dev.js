const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: path.resolve(__dirname, '../example/index.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',
            template: './public/dev.html',
            filename: 'index.html',
        })
    ],
    module: {
        rules: [{
            test: /\.md$/,
            use: [{
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        /* your options here */
                    }
                }
            ]
        }]
    },
    devServer: {
        host: 'localhost',
        port: 1573,
        open: true,
    }
})