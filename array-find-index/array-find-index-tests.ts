/// <reference path="./array-find-index.d.ts" />

import * as arrayFindIndex from 'array-find-index';

arrayFindIndex(['rainbow', 'unicorn', 'pony'], x => x === 'unicorn');

const ctx = {foo: 'rainbow'};
arrayFindIndex(['rainbow', 'unicorn', 'pony'], function (x) {
	return x === this.foo;
}, ctx);
