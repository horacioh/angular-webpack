var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


var serverPort = 9995;
var __DEV__ = (process.env.NODE_ENV!=='production');

module.exports = {
	devtool: __DEV__?'eval-source-map':'eval',
	debug: __DEV__,
	context: __dirname + "/client/app",
	entry: {
		app: "./app.js",
		vendors: [
			'angular',
			'lodash'
		]
	},
	output: {
		path: __dirname + "/dist",
		filename: "app-[chunkhash].js",
		hash: true
	},
	node: {
		fs: "empty"
	},
	devServer: {
		contentBase: __dirname + '/dist',
		info: true,
		inline: true,
		colors: true,
		host: '0.0.0.0',
		port: serverPort
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel?stage=1'
		},{
			test: /\.css$/,
			loader: "style!css"
		},{
			test: /\.(eot|woff|ttf|svg|woff2|png|jpg|jpeg)$/,
			loader: "file"
		},{
			test: /\.html$/,
			loader: "raw"
		}]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors-[chunkhash].js'),
		new HtmlWebpackPlugin({
			template: './client/index.html'
		}),
		new ngAnnotatePlugin({
			add: true
		})
	]
};