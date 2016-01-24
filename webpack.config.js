var config = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				cacheDirectory: true,
				plugins: ['transform-runtime', 'add-module-exports'],
				presets: ['es2015', 'react', 'stage-1']
			}
		}]
	}
};

module.exports = config;
