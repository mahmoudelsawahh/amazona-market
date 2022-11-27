const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode : "development",
    devtool : false,
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader" , "sass-loader"],
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
        new HtmlWebpackPlugin({
        template : './src/index.html'
      })
    ],
}

