const path = require('path');

module.exports = [
	{
		entry: './client/src/views/template/index.ts',
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		externals: { fin: 'fin' },
		output: {
			filename: 'index.bundle.js',
			library: {
				type: 'module'
			},
			path: path.resolve(__dirname, '..', 'public', 'views', 'template', 'ts')
		},
		experiments: {
			outputModule: true
		}
	}
];
