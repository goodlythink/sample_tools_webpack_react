const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',  //default ได้ main.js
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        inline: true    //บอก webpack-dev-servef ให้ add โค้ดที่จำเป็นเข้าไปก่อน entry
    }
}