const path = require('path')

module.exports = {
  mode: 'development',
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
	  rules: [
		  {
			  test: /\.js$/,
				use: {
				  loader: 'babel-loader',
					options: {
					  cacheDirectory: true,
						plugins: ['transform-runtime', 'add-module-exports'],
						presets: ['env', 'react', 'stage-1']
					}
				},
				exclude: /node_modules/
			}
		]
	}
};
