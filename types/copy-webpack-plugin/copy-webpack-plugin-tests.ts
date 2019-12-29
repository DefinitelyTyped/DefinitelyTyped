import { Configuration } from 'webpack'
import CopyWebpackPlugin = require('copy-webpack-plugin');

const c: Configuration = {
	plugins: [
		new CopyWebpackPlugin([
			// {output}/file.txt
			{ from: 'from/file.txt' },

			// {output}/to/file.txt
			{ from: 'from/file.txt', to: 'to/file.txt' },

			// {output}/to/directory/file.txt
			{ from: 'from/file.txt', to: 'to/directory' },

			// Copy directory contents to {output}/
			{ from: 'from/directory' },

			// Copy directory contents to {output}/to/directory/
			{ from: 'from/directory', to: 'to/directory' },

			// Copy glob results to /absolute/path/
			{ from: 'from/directory/**/*', to: '/absolute/path' },

			// Copy glob results (with dot files) to /absolute/path/
			{
				from: {
					glob:'from/directory/**/*',
					dot: true,
				},
				to: '/absolute/path'
			},

			// Copy glob results, relative to context
			{
				context: 'from/directory',
				from: '**/*',
				to: '/absolute/path'
			},

			// {output}/file/without/extension
			{
				from: 'path/to/file.txt',
				to: 'file/without/extension',
				toType: 'file'
			},

			// {output}/directory/with/extension.ext/file.txt
			{
				from: 'path/to/file.txt',
				to: 'directory/with/extension.ext',
				toType: 'dir'
			},

			// transform and cache (cache is always used with transform option).
			{
				from: 'src/*.png',
				to: 'dest/',
				transform: (content, path) => content,
				cache: true
			},

			// Copy glob results (without dot files) to {output}/to/directory/
			{
				from: '**/*.png',
				to: 'to/directory'
			},

			// Turns 1st and 2nd level directory names into file name seperated by a dash for png files
			{
				from: '*/*',
				to: '[1]-[2].[hash].[ext]',
				test: /([^/]+)\/(.+)\.png$/,
			},
		], {
			// Log only errors
			logLevel: 'error',
			
			// All 'from' paths will be intepreted from this context
			context: 'app/',

			ignore: [
				// Doesn't copy any files with a txt extension
				'*.txt',

				// Doesn't copy any file, even if they start with a dot
				'**/*',

				// Doesn't copy any file, except if they start with a dot
				{ glob: '**/*', dot: false }
			],

			// By default, we only copy modified files during
			// a watch or webpack-dev-server build. Setting this
			// to `true` copies all files.
			copyUnmodified: true,
		})
	]
}
