import * as cwise from 'cwise';
import * as ndarray from 'ndarray';
import * as tape from 'tape';

// basic
tape("only allow same shape", (t) => {
	const op1 = cwise({
		args: ["array"],
		body: (a: number) => { a = 1; }
	});
	const op2 = cwise({
		args: ["array", "array"],
		body: (a: number, b: number) => { a = b; }
	});
	const op3 = cwise({
		args: ["array", "array", "array"],
		body: (a: number, b: number, c: number) => { a = b + c; }
	});
	const op2block_pos = cwise({
		args: ["array", { blockIndices: 1 }],
		body: (a: number, b: number[]) => { a = b[1]; }
	});
	const op2block_neg = cwise({
		args: ["array", { blockIndices: -1 }],
		body: (a: number, b: number[]) => { a = b[1]; }
	});

	t.doesNotThrow(() => { op1(ndarray([1, 2, 3], [3])); });
	t.doesNotThrow(() => { op2(ndarray([1, 2, 3], [3]), ndarray([1, 2, 3], [3])); });
	t.doesNotThrow(() => { op2(ndarray([1, 2, 3, 4, 5, 6], [3, 2]), ndarray([1, 2, 3, 4, 5, 6], [3, 2])); });
	t.doesNotThrow(() => { op3(ndarray([1, 2, 3], [3]), ndarray([1, 2, 3], [3]), ndarray([1, 2, 3], [3])); });
	t.doesNotThrow(() => { op2block_pos(ndarray([1, 2], [2]), ndarray([1, 2, 3, 4, 5, 6], [3, 2])); });
	t.doesNotThrow(() => { op2block_neg(ndarray([1, 2, 3], [3]), ndarray([1, 2, 3, 4, 5, 6], [3, 2])); });

	t.throws(() => { op2(ndarray([1, 2, 3], [3]), ndarray([1, 2], [2])); });
	t.throws(() => { op2(ndarray([1, 2, 3, 4, 5, 6], [3, 2]), ndarray([1, 2, 3], [3, 1])); });
	t.throws(() => { op2(ndarray([1, 2, 3, 4, 5, 6], [3, 2]), ndarray([1, 2, 3, 4], [2, 2])); });
	t.throws(() => { op3(ndarray([1, 2, 3], [3]), ndarray([1, 2, 3], [3]), ndarray([1, 2], [2])); });
	t.throws(() => { op3(ndarray([1, 2, 3], [3]), ndarray([1, 2], [2]), ndarray([1, 2, 3], [3])); });
	t.throws(() => { op3(ndarray([1, 2], [2]), ndarray([1, 2, 3], [3]), ndarray([1, 2, 3], [3])); });
	t.throws(() => { op2block_pos(ndarray([1, 2, 3], [3]), ndarray([1, 2, 3, 4, 5, 6], [3, 2])); });
	t.throws(() => { op2block_neg(ndarray([1, 2], [2]), ndarray([1, 2, 3, 4, 5, 6], [3, 2])); });
	t.throws(() => { op2block_pos(ndarray([1, 2, 3, 4, 5, 6], [3, 2]), ndarray([1, 2, 3, 4], [2, 2])); });
	t.throws(() => { op2block_neg(ndarray([1, 2, 3, 4, 5, 6], [3, 2]), ndarray([1, 2, 3, 4], [2, 2])); });

	t.end();
});

// binarry
class DumbStorage {
	data: Int32Array;
	length: number;
	constructor(n: number) {
		this.data = new Int32Array(n);
		this.length = n;
	}
	get(i: number) {
		return this.data[i];
	}
	set(i: number, v: number) {
		return this.data[i] = v;
	}
}

tape("binary", (t) => {
	const binary = cwise({
		args: ["array", "array", "scalar", "shape", "index"],
		body(a: number, b: number, t: tape.Test, s: number[], idx: number) {
			if (!(a === 0)) t.fail("idx:" + idx + ", shape:" + s + ",a:" + a);
			a = b + 1001;
		}
	});

	function testBinary1D(P: ndarray, Q: ndarray, testName: string) {
		t.equals(P.shape[0], Q.shape[0], testName + "; shape");
		for (let i = 0; i < P.shape[0]; ++i) {
			Q.set(i, i);
			P.set(i, 0);
		}
		binary(P, Q, t);
		for (let i = 0; i < P.shape[0]; ++i) {
			if (!(P.get(i) === i + 1001)) {
				t.fail(testName + "; encountered " + P.get(i) + " instead of " + (i + 1001) + " at " + i);
				return;
			}
		}
		t.pass(testName);
	}

	const A1 = ndarray(new Int32Array(128));
	const B1 = ndarray(new Int32Array(128));

	testBinary1D(ndarray(new Int32Array(0)), ndarray(new Int32Array(0)), "length==0");
	testBinary1D(ndarray(new Int32Array(1)), ndarray(new Int32Array(1)), "length==1");
	testBinary1D(A1, B1, "A, B");
	testBinary1D(A1.lo(32), B1.hi(128 - 32), "A.lo(32), B.hi(128-32)");
	testBinary1D(A1.step(-1), B1, "A.step(-1), B");
	testBinary1D(A1, B1.step(-1), "A, B.step(-1)");

	const A2 = ndarray(new DumbStorage(128) as any);
	const B2 = ndarray(new DumbStorage(128) as any);
	testBinary1D(ndarray(new DumbStorage(0) as any), ndarray(new DumbStorage(0) as any), "DS; length==0");
	testBinary1D(ndarray(new DumbStorage(1) as any), ndarray(new DumbStorage(1) as any), "DS; length==0");
	testBinary1D(A2, B2, "DS; A, B");
	testBinary1D(A2.lo(32), B2.hi(128 - 32), "DS; A.lo(32), B.hi(128-32)");
	testBinary1D(A2.step(-1), B2, "DS; A.step(-1), B");
	testBinary1D(A2, B2.step(-1), "DS; A, B.step(-1)");

	const X = ndarray(new Int32Array(64 * 64), [64, 64]);
	const Y = ndarray(new Int32Array(64 * 64), [64, 64]);

	function testBinary2D(P: ndarray, Q: ndarray, testName: string) {
		for (let i = 0; i < X.shape[0]; ++i) {
			for (let j = 0; j < X.shape[1]; ++j) {
				X.set(i, j, -10000);
				Y.set(i, j, -256);
			}
		}
		t.equals(P.shape[0], Q.shape[0], testName + "; shape[0]");
		t.equals(P.shape[1], Q.shape[1], testName + "; shape[1]");
		for (let i = 0; i < P.shape[0]; ++i) {
			for (let j = 0; j < P.shape[1]; ++j) {
				Q.set(i, j, i * 1000 + j);
				P.set(i, j, 0);
			}
		}
		binary(P, Q, t, P.shape);
		for (let i = 0; i < P.shape[0]; ++i) {
			for (let j = 0; j < P.shape[1]; ++j) {
				if (!(P.get(i, j) === i * 1000 + j + 1001)) {
					t.fail(testName + "; encountered " + P.get(i, j) + " instead of " + (i * 1000 + j + 1001) + " at (" + i + "," + j + ")");
					return;
				}
			}
		}
		t.pass(testName);
	}

	testBinary2D(X, Y, "X, Y");
	testBinary2D(X.transpose(1, 0), Y.transpose(1, 0), "X.T, Y.T");
	testBinary2D(X.transpose(1, 0), Y, "X.T, Y");
	testBinary2D(X, Y.transpose(1, 0), "X, Y.T");
	testBinary2D(X.hi(32, 32), Y.hi(32, 32), "X.hi(32,32), Y.hi(32,32)");
	testBinary2D(X.hi(31, 31), Y.hi(31, 31), "X.hi(31,31), Y.hi(31,31)");
	testBinary2D(X.hi(0, 32), Y.hi(0, 32), "X.hi(0,32), Y.hi(0,32)");
	testBinary2D(X.transpose(1, 0).hi(0, 32), Y.hi(0, 32), "X.T.hi(0,32), Y.hi(0,32)");
	testBinary2D(X.transpose(1, 0).hi(33, 33), Y.hi(33, 33), "X.T.hi(33,33), Y.hi(33,33)");
	testBinary2D(X.transpose(1, 0).hi(31, 31), Y.hi(31, 31), "X.T.hi(31,31), Y.hi(31,31)");

	t.end();
});

// browserify
import * as browserify from "browserify";
import * as vm from 'vm';
import * as path from 'path';

const cases = ["unary", "binary", "offset", "fill"];

bundleCasesFrom(0);

function bundleCasesFrom(i: number) {
	if (i >= cases.length) return;
	const b = browserify();
	b.ignore("tape");
	b.add(__dirname + "/" + cases[i] + ".js");
	b.transform(path.normalize(__dirname + "/../cwise.js"));
	tape(cases[i], (t) => { // Without nested tests, the asynchronous nature of bundle causes issues with tape...
		b.bundle((err, src) => {
			if (err) {
				throw new Error("failed to bundle!");
			}
			vm.runInNewContext(src.toString(), {
				test: t.test.bind(t),
				Buffer,
				Int8Array,
				Int16Array,
				Int32Array,
				Float32Array,
				Float64Array,
				Uint8Array,
				Uint16Array,
				Uint32Array,
				Uint8ClampedArray,
				console: { log: console.log.bind(console) }
			});
			t.end();
		});
	});
	bundleCasesFrom(i + 1);
}

// fill
tape("fill", (t) => {
	const fill = cwise({
		args: ["index", "array", "scalar"],
		body(idx, out, f) {
			out = f.apply(undefined, idx);
		}
	});

	const xlen = 10;
	const ylen = 5;
	const array = ndarray(new Float32Array(xlen * ylen), [xlen, ylen]);

	fill(array, (row: number, col: number) => {
		return 0;
	});

	for (let i = 0; i < xlen; i++) {
		for (let j = 0; j < ylen; j++) {
			t.equals(array.get(i, j), 0, 'fill (' + i + ',' + j + ')');
		}
	}

	fill(array, (row: number, col: number) => {
		return 10 * (row + col);
	});

	for (let i = 0; i < xlen; i++) {
		for (let j = 0; j < ylen; j++) {
			t.equals(array.get(i, j), 10 * (i + j), 'fill (' + i + ',' + j + ')');
		}
	}

	t.end();
});

// offset
tape("offset", (t) => {
	const binary = cwise({
		args: ["array", "array", { offset: [1], array: 1 }, "scalar", "shape", "index"],
		body(a, b, c, t, s, idx) {
			if (!(a === 0)) t.fail("idx:" + idx + ", shape:" + s + ",a:" + a);
			a = c + b + 1000;
		}
	});

	function testBinary1D(P: ndarray, Q: ndarray, testName: string) {
		t.equals(P.shape[0], Q.shape[0] - 1, testName + "; shape");
		for (let i = 0; i < P.shape[0]; ++i) {
			Q.set(i, i);
			P.set(i, 0);
		}
		Q.set(P.shape[0], P.shape[0]);
		binary(P, Q.hi(Q.shape[0] - 1), t);
		for (let i = 0; i < P.shape[0]; ++i) {
			if (!(P.get(i) === 2 * i + 1001)) {
				t.fail(testName + "; encountered " + P.get(i) + " instead of " + (2 * i + 1001) + " at " + i);
				return;
			}
		}
		t.pass(testName);
	}

	const A1 = ndarray(new Int32Array(128));
	const B1 = ndarray(new Int32Array(129));

	testBinary1D(ndarray(new Int32Array(0)), ndarray(new Int32Array(1)), "length==0");
	testBinary1D(ndarray(new Int32Array(1)), ndarray(new Int32Array(2)), "length==1");
	testBinary1D(A1, B1, "A, B");
	testBinary1D(A1.lo(32), B1.lo(32), "A.lo(32), B.lo(32)");
	testBinary1D(A1.step(-1), B1, "A.step(-1), B");
	testBinary1D(A1, B1.step(-1), "A, B.step(-1)");

	const A2 = ndarray(new DumbStorage(128) as any);
	const B2 = ndarray(new DumbStorage(129) as any);
	testBinary1D(ndarray(new DumbStorage(0) as any), ndarray(new DumbStorage(1) as any), "DS; length==0");
	testBinary1D(ndarray(new DumbStorage(1) as any), ndarray(new DumbStorage(2) as any), "DS; length==1");
	testBinary1D(A2, B2, "DS; A, B");
	testBinary1D(A2.lo(32), B2.lo(32), "DS; A.lo(32), B.lo(32)");
	testBinary1D(A2.step(-1), B2, "DS; A.step(-1), B");
	testBinary1D(A2, B2.step(-1), "DS; A, B.step(-1)");

	t.end();
});

// unary

tape("unary", (t) => {
	const unary = cwise({
		args: ["array"],
		body(a) {
			++a;
		}
	});

	function testUnary1D(arr: ndarray, testName: string) {
		for (let i = 0; i < arr.shape[0]; ++i) {
			arr.set(i, i);
		}
		unary(arr);
		for (let i = 0; i < arr.shape[0]; ++i) {
			if (!(arr.get(i) === i + 1)) {
				t.fail(testName + "; encountered " + arr.get(i) + " instead of " + (i + 1) + " at " + i);
				return;
			}
		}
		t.pass(testName);
	}
	const simple_zeros = ndarray(new Int32Array(4096));

	testUnary1D(simple_zeros.hi(0), "simple_zeros.hi(0)");
	testUnary1D(simple_zeros.hi(1), "simple_zeros.hi(1)");
	testUnary1D(simple_zeros.hi(2), "simple_zeros.hi(2)");
	testUnary1D(simple_zeros, "simple_zeros");
	testUnary1D(simple_zeros.hi(31), "simple_zeros.hi(31)");
	testUnary1D(simple_zeros.hi(32), "simple_zeros.hi(32)");
	testUnary1D(simple_zeros.hi(33), "simple_zeros.hi(33)");
	testUnary1D(simple_zeros.step(-1), "simple_zeros.step(-1)");
	testUnary1D(simple_zeros.step(3), "simple_zeros.step(3)");
	testUnary1D(simple_zeros.step(4), "simple_zeros.step(4)");
	testUnary1D(simple_zeros.step(5).lo(10), "simple_zeros.step(5).lo(10)");

	const custom_zeros = ndarray(new DumbStorage(4096) as any);

	testUnary1D(custom_zeros.hi(0), "custom_zeros.hi(0)");
	testUnary1D(custom_zeros.hi(1), "custom_zeros.hi(1)");
	testUnary1D(custom_zeros.hi(2), "custom_zeros.hi(2)");
	testUnary1D(custom_zeros, "custom_zeros");
	testUnary1D(custom_zeros.hi(31), "custom_zeros.hi(31)");
	testUnary1D(custom_zeros.hi(32), "custom_zeros.hi(32)");
	testUnary1D(custom_zeros.hi(33), "custom_zeros.hi(33)");
	testUnary1D(custom_zeros.step(-1), "custom_zeros.step(-1)");
	testUnary1D(custom_zeros.step(3), "custom_zeros.step(3)");
	testUnary1D(custom_zeros.step(4), "custom_zeros.step(4)");
	testUnary1D(custom_zeros.step(5).lo(10), "custom_zeros.step(5).lo(10)");

	function testUnary2D(arr: ndarray, testName: string) {
		for (let i = 0; i < arr.shape[0]; ++i) {
			for (let j = 0; j < arr.shape[1]; ++j) {
				arr.set(i, j, i + j * arr.shape[0]);
			}
		}
		unary(arr);
		for (let i = 0; i < arr.shape[0]; ++i) {
			for (let j = 0; j < arr.shape[1]; ++j) {
				if (!(arr.get(i, j) === 1 + i + j * arr.shape[0])) {
					t.fail(testName + "; encountered " + arr.get(i, j) + " instead of " + (1 + i + j * arr.shape[0]) + " at (" + i + "," + j + ")");
					return;
				}
			}
		}
		t.pass(testName);
	}

	const M1 = ndarray(new Int32Array(128 * 128), [128, 128]);
	testUnary2D(M1, "M");
	testUnary2D(M1.hi(10, 10), "M.hi(10, 10)");
	testUnary2D(M1.lo(100, 1), "M.lo(100,1)");
	testUnary2D(M1.transpose(1, 0), "M.transpose(1,0)");
	testUnary2D(M1.step(-1, 1), "M.step(-1, 1)");
	testUnary2D(M1.step(-5, -2), "M.step(-5, -2)");
	testUnary2D(M1.step(16, 3), "M.step(16, 3)");

	const M2 = ndarray(new DumbStorage(128 * 128) as any, [128, 128]);
	testUnary2D(M2, "DS; M");
	testUnary2D(M2.hi(10, 10), "DS; M.hi(10, 10)");
	testUnary2D(M2.lo(100, 1), "DS; M.lo(100,1)");
	testUnary2D(M2.transpose(1, 0), "DS; M.transpose(1,0)");
	testUnary2D(M2.step(-1, 1), "DS; M.step(-1, 1)");
	testUnary2D(M2.step(-5, -2), "DS; M.step(-5, -2)");
	testUnary2D(M2.step(16, 3), "DS; M.step(16, 3)");

	t.end();
});
