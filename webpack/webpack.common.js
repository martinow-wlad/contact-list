const path = require('path');
const cssExtract = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/polyfill');

module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        filename: 'assets/js/main.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(s*)css$/,
                use: [
                    cssExtract.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: (url, resourcePath) => {
                        if (/assets\\img/.test(resourcePath)) {
                            return `../img/${url}`;
                        }

                        if (/assets\\fonts/.test(resourcePath)) {
                            return `../fonts/${url}`;
                        }
            
                        return `${url}`;
                    },
                    outputPath: (url, resourcePath) => {
                        if (/assets\\img/.test(resourcePath)) {
                            return `assets/img/${url}`;
                        }

                        if (/assets\\fonts/.test(resourcePath)) {
                            return `assets/fonts/${url}`;
                        }
            
                        return `assets/${url}`;
                    }
                },
            }    
        ]
    },
    plugins: [
        new cssExtract({
            filename: 'assets/styles/style.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: false
        }),
    ]
};