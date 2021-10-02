import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Options settings
import pluginOptions from './pluginOptions/index.js'


export default {
    // webpack --mode=development
    // mode: 'development', // development, production or none
    entry: {
        test: ['./src/js/index.js', './src/css/index.scss']
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // 切割 .css
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|png)$/i,
                type: "asset",
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: (pathData) => {
            return '[name].js'
        },
    },
    plugins: [
        new webpack.BannerPlugin(pluginOptions.banner), // 檔案前綴
        new MiniCssExtractPlugin(pluginOptions.miniCssExtract),
        new Dotenv(pluginOptions.dotEnv),
        new webpack.DefinePlugin(pluginOptions.define),
        new HtmlWebpackPlugin(pluginOptions.html),
        new CopyWebpackPlugin(pluginOptions.copy),
    ]
};