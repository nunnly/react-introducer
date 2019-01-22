const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: 'pack.js',
        library: 'pack',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'dom-align': 'dom-align'
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
    ]
})