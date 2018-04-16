const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname +'/app/index.js' ),
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].[hash:8].bundle.js'
    },
    devtool:"inline-source-map",
    devServer: {
        hot: true,
        inline: true,
        progress:true,
        contentBase: path.join(__dirname, "app"),
        host:'localhost',
        port:'8090'
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env',
                        '@babel/preset-stage-1',
                    ],
                    plugins: [
                        'transform-decorators-legacy',
                        [
                          'transform-class-properties', { loose: true, },
                        ],
                      ]
                }
            },
            {
                test: /\.css$/,loader: ('style-loader!css-loader'),
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'app/index.html'
		})
	],
    resolve: {
        extensions: ['.css', '.js', '.jsx'],
    }
};