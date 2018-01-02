import isScoped = require('is-scoped');

const tests: boolean[] = [
	isScoped('is-scoped'),
	isScoped('@types/is-scoped'),
];
