const path = require('path')
const htmlWebpackPlugin =require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.join(__dirname,'/src/main.js'),
  output:{
    path: path.join(__dirname,"/dist"),
    filename: 'bundle.js'
  },
  devServer:{
    open:true,
    port:3000,
    contentBase:'src',
    hot:true
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}, 
      {test:/\.(jpg|bmp|jpeg|png|gif)$/,use:{loader:'url-loader',options:{esModule: false}}},
      // limit的值是图片的大小 单位为 byte ， 如果我们引用的图片小于这个值会进行base64转码，等于或大于 就不转码
      { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' },
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
      {test:/\.vue$/,use:'vue-loader'}
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template: path.join(__dirname,'/src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve:{
    alias:{
      "vue$": "vue/dist/vue.js"
    }
  }
}