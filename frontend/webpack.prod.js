const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode : "production",
    devtool : false,
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
            MiniCssExtractPlugin.loader,
             "css-loader" , 
             "sass-loader"
            ],
          },
          {
            test: /\.html$/i,
            use : [
            {
            loader: "html-loader",
            options: {
              esModule: false,
                 }
            }
            ]
            
          },
          {
            test: /\.(png|jpg|jpe?g|gif)$/i,
            use : [
                {
                    loader: "file-loader",
                    options : {
                        esModule: false,
                        name : 'images/[name].[contenthash].[ext]'
                    }

                }
            ]
          }
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename : '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        
        new HtmlWebpackPlugin({
        template : './src/index.html'
      })
    ],
    optimization : {
      minimize : false
    }
}
