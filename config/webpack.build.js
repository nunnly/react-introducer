const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: path.resolve(__dirname, '../example/gitpages.js'),
        example: path.resolve(__dirname, '../example/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/build/',
        filename: '[name].js',
        library: 'main',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.md$/,
            use: [{
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                }
            ]
        }]
    }

})