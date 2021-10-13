const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: 'assets/images/[name].[contenthash].[ext][query]'

    },
    mode: 'development',
    watch: true,
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(css|styl)$/i,
            use: [MiniCssExtractPlugin.loader, 
                'css-loader',
                'stylus-loader'
            ],
        },
        {
            test: /\.png$/,
            type: 'asset/resource'
        },
        {
            test: /\.(woff|woff2)$/,
            type: 'asset/resource',
            generator: {
                filename: "assets/fonts/[name].[contenthash].[ext][query]"
            }
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),
        new Dotenv(),
        
    ],
}