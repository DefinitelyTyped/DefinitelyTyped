import parse = require('cwise-parser');
import ndarray = require('ndarray');
import compile = require('cwise-compiler');
import tape = require('tape');

tape("block tests", (t) => {
	const ops = require('ndarray-ops');
	const body2 = parse((a: number, b: number[]) => {
		a = b[0] + b[1] + 1;
	});
	const body23 = parse((a: number, b: number[][]) => {
		a = b[0][0] * b[1][0] + b[0][1] * b[1][1] + b[0][2] * b[1][2];
	});

	// Test with block index at the front of the indices
	const c1 = compile({
		args: ["array", { blockIndices: 1 }],
		pre: parse(() => { }),
		body: body2,
		post: parse(() => { }),
		debug: false,
		funcName: "cwise",
		blockSize: 64
	});

	const a1 = ndarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [3, 4]);
	const b1 = ndarray([57, 17, 95, 78, 16, 96, 85, 93, 38, 42, 16, 66, 23, 77, 17, 36, 30, 52, 16, 18, 23, 69, 67, 27], [2, 3, 4]);
	const ref1 = ndarray([81, 95, 113, 115, 47, 149, 102, 112, 62, 112, 84, 94], [3, 4]);

	c1(a1, b1);

	t.ok(ops.equals(a1, ref1), "front block");

	// Test with block index at the back of the indices
	const c2 = compile({
		args: ["array", { blockIndices: -1 }],
		pre: parse(() => { }),
		body: body2,
		post: parse(() => { }),
		debug: false,
		funcName: "cwise",
		blockSize: 64
	});

	const a2 = ndarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [3, 4]);
	const b2 = ndarray([57, 17, 95, 78, 16, 96, 85, 93, 38, 42, 16, 66, 23, 77, 17, 36, 30, 52, 16, 18, 23, 69, 67, 27], [3, 4, 2]);
	const ref2 = ndarray([75, 174, 113, 179, 81, 83, 101, 54, 83, 35, 93, 95], [3, 4]);

	c2(a2, b2);

	t.ok(ops.equals(a2, ref2), "back block");

	// Multiple block indices
	const c3 = compile({
		args: ["array", { blockIndices: -2 }],
		pre: parse(() => { }),
		body: body23,
		post: parse(() => { }),
		debug: false,
		funcName: "cwise",
		blockSize: 64
	});
	const a3 = ndarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [3, 4]);
	const b3 = ndarray([48, 46, 89, 64, 72, 96, 38, 37, 79, 92, 89, 62, 84, 41, 13, 81, 53, 30, 68, 78, 34, 81, 90, 50,
		82, 97, 46, 18, 11, 79, 15, 68, 88, 58, 71, 84, 76, 35, 74, 82, 27, 47, 59, 25, 78, 61, 10, 43,
		96, 59, 21, 74, 41, 67, 11, 72, 38, 62, 95, 66, 57, 44, 93, 10, 51, 59, 50, 85, 71, 41, 79, 45], [3, 4, 2, 3]);
	const ref = ndarray([14928, 11687, 9367, 14228, 6177, 13090, 10655, 7203, 10930, 10030, 8301, 11960], [3, 4]);

	c3(a3, b3);

	t.ok(ops.equals(a3, ref), "block with two indices");

	t.end();
});
