import * as happyPack from 'happypack';

const ref: happyPack = new happyPack({
	id: '1',
    threads: 1,
	loaders: ['ts-loader']
});
