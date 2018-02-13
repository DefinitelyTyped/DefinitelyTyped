import * as autopref from 'autoprefixer';

const ap: autopref.Transformer = autopref({
	browsers: ['> 5%', 'last 2 versions'],
	env: '',
	cascade: true,
	add: true,
	remove: true,
	supports: true,
	flexbox: true,
	grid: true,
	stats: {},
});
const ap2: autopref.Transformer = autopref({
	flexbox: 'no-2009',
});
const info: string = ap.info();
