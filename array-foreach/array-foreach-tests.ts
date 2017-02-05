import arrayForEach = require('array-foreach');

const array: Array<number> = [1, 2, 3, 4];
const result: Array<number> = [];

arrayForEach(array, (i: number) => {
	result.push(i);
});

arrayForEach(array, (i: number, index: number) => {
	result.push(i + index);
});

arrayForEach(array, (i: number, index: number, array: Array<number>) => {
	result.push(array[i]);
});

const resultThis: Array<{i: number, that: string}> = [];

arrayForEach(array, function(i) {
	resultThis.push({
		i: i,
		that: this.that
	});
}, { that: 'jeff' });

arrayForEach(array, function(i, index) {
	resultThis.push({
		i: i + index,
		that: this.that
	});
}, { that: 'jeff' });

arrayForEach(array, function(i, index, array) {
	resultThis.push({
		i: array[i],
		that: this.that
	});
}, { that: 'jeff' });