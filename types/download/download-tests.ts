import * as fs from 'fs';
import download = require('download');

download('http://unicorn.com/foo.jpg', 'dist').then(() => {
	console.log('done!');
});

download('http://unicorn.com/foo.jpg').then(data => {
	fs.writeFileSync('dist/foo.jpg', data);
});

download('unicorn.com/foo.jpg').pipe(fs.createWriteStream('dist/foo.jpg'));

download('unicorn.com/foo.jpg', 'dest', {
	body: '',
	decompress: true,
	encoding: 'utf8',
	extract: true,
	filename: 'filename',
	followRedirect: true,
	proxy: '',
	query: '',
	retries: (retry: number, error: any) => 4,
	timeout: {
		connect: 20,
		request: 20,
		socket: 20
	},
	useElectronNet: true
});
