//  引入库
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    optimization: {
        minimize: true
    },
    // loader
    module: {
        rules: [{
                test: /\.(js|jsx|mjs)$/,
                include: [resolve('src'), resolve('example')],
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    // 忽略扩展名
    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },

}