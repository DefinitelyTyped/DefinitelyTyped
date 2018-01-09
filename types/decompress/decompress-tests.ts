import decompress = require('decompress');
import * as path from "path";

decompress('unicorn.zip', 'dist').then(files => {
	console.log('done!');
});

decompress('unicorn.zip', 'dist', {
	filter: file => path.extname(file.path) !== '.exe'
}).then(files => {
	console.log('done!');
});

decompress('unicorn.zip', 'dist', {
	map: file => {
		file.path = `unicorn-${file.path}`;
		return file;
	}
}).then(files => {
	console.log('done!');
});
