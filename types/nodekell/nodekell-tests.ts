import * as F from 'nodekell';

/*
https://github.com/Microsoft/TypeScript/pull/30215

declare function pipe<A extends any[], B, C>(ab: (...args: A) => B, bc: (b: B) => C): (...args: A) => C;

declare function list<T>(a: T): T[];
declare function box<V>(x: V): { value: V };

const listBox = pipe(list, box);  // <T>(a: T) => { value: T[] }
const boxList = pipe(box, list);  // <V>(x: V) => { value: V }[]

const x1 = listBox(42);  // { value: number[] }
const x2 = boxList("hello");  // { value: string }[]

const flip = <A, B, C>(f: (a: A, b: B) => C) => (b: B, a: A) => f(a, b);
const zip = <T, U>(x: T, y: U): [T, U] => [x, y];
const flipped = flip(zip);  // <T, U>(b: U, a: T) => [T, U]

const t1 = flipped(10, "hello");  // [string, number]
const t2 = flipped(true, 0);  // [number, boolean] */

/* const abc = F.curry((b: number, c: string, d: null) => {
  return [b, c, d];
});

const rrr0 = abc(1)('')(null);
const rrr1 = abc(1)('', null);
const rrr2 = abc(1, '')(null);
const rrr3 = abc(1, '', null); */

declare const process: any;
declare const console: any;

const cerror = (...a: any[]) => {
	if (console) {
		console.error(...a);
	}
};

const clog = (...a: any[]) => {
	if (console) {
		console.log(...a);
	}
};

const describe = (str: string, f: () => any) => {
	clog(str);
	f();
};

const it = (str: string, f: () => any) => {
	clog('\t', str);
	f();
};

//
// core.js
//
describe('util functions', () => {
	it('seq', () => {
		const range0 = F.range(10, 0, -1); // $ExpectType IterableIterator<number>
		const range1 = F.range(6974); // $ExpectType IterableIterator<number>

		const seq0 = F.seq(['1', '2', '3', '4']); // $ExpectType AsyncIterableIterator<string>
		const seq1 = F.seq(range1); // $ExpectType AsyncIterableIterator<number>
		const seq2 = F.seq(seq1); // $ExpectType AsyncIterableIterator<number>
		const seq3 = F.seq('hello'); // $ExpectType AsyncIterableIterator<string>
	});

	it('ioe', () => {
		const ioe = F.ioe(null); // $ExpectType null
	});

	it('add', () => {
		const add0 = F.add('1', '2'); // $ExpectType string
		const add1 = F.add(1, 2); // $ExpectType number
	});

	it('increment / decrement', () => {
		const inc0 = F.inc(8); // $ExpectType number
		const dec0 = F.dec(10); // $ExpectType number
	});

	it('first / second', () => {
		const first0 = F.first([0, '1', 2, 3, 4]); // $ExpectType string | number

		const second0 = F.second([0, '1', 2, 3, 4]); // $ExpectType string | number
	});

	it('notNil', () => {
		const notNil = F.notNil(0); // $ExpectType boolean
	});
});

describe('curry', () => {
	it('curry2 test', () => {
		const curry2 = F.curry((a: 1, b: 2) => '3');
		// 1
		curry2(1)(2); // $ExpectType string
		// 2
		curry2(1, 2); // $ExpectType string
	});

	it('curry3 test', () => {
		const curry3 = F.curry((a: 1, b: 2, c: 3) => '4');
		// 1
		curry3(1)(2)(3); // $ExpectType string
		// 2
		curry3(1)(2, 3); // $ExpectType string
		// 3
		curry3(1, 2)(3); // $ExpectType string
		// 4
		curry3(1, 2, 3); // $ExpectType string
	});

	it('curry4 test', () => {
		const curry4 = F.curry((a: 1, b: 2, c: 3, d: 4) => '5');
		// 1
		curry4(1)(2)(3)(4); // $ExpectType string
		// 2
		curry4(1)(2)(3, 4); // $ExpectType string
		// 3
		curry4(1)(2, 3)(4); // $ExpectType string
		// 4
		curry4(1)(2, 3, 4); // $ExpectType string
		// 5
		curry4(1, 2)(3)(4); // $ExpectType string
		// 6
		curry4(1, 2)(3, 4); // $ExpectType string
		// 7
		curry4(1, 2, 3)(4); // $ExpectType string
		// 8
		curry4(1, 2, 3, 4); // $ExpectType string
	});
});

///
/// prelude.js
///
describe('run', () => {
	it('', async () => {
		const a = [1, 2, 3, Promise.resolve(4), 5, 6];
		const b = [1, 2, Promise.resolve(3), [4, Promise.resolve(5)]];
		const c = F.range(Infinity);
		const d = F.range(50000, 0, -1);
		const e = ['hello', ['w', Promise.resolve('o'), 'rld']];

		const run1 = await F.run(a, F.map(F.inc));
		const run2 = await F.run(b, F.flat, F.map(e => e - e));
		const run3 = await F.run(c, F.map(F.inc), F.take(100), F.foldl1((acc, e) => acc + e));
		const run4 = await F.run(c, F.map(e => e ** e), F.take(10), F.map(e => e % 2), F.average);
		const run5 = await F.run(d, F.map(e => e ** 2), F.filter(e => e > 40000), F.drop(10000), F.take(200), F.foldr1(F.sub));
		const run6 = await F.run(e, F.flat, F.flat, F.scanl1((a, b) => a + b), F.foldl1(F.add), F.then(async e => F.flat(await e)), F.then((async (e) => F.distinct(await e))));
	});
});

describe('head', () => {
	it('from Normal Value', async () => {
		const a = [10, 9, 8, 7];

		const r0 = await F.head(a); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = F.seq([10, Promise.resolve(9), 8, 7]);

		const r0 = await F.head(a); // $ExpectType number
	});
});

describe('tail', () => {
	it('from Normal Value', () => {
		const a = [10, 9, 8, 7];

		const r0 = F.tail(a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([10, 9, Promise.resolve(8), 7]);

		const r0 = F.tail(a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('drop', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.drop<number>(Infinity)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.drop(Infinity, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([1, 2, 3, Promise.resolve(4), 5]);

		const r0 = F.drop<number>(Infinity)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.drop(Infinity, a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('dropWhile', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4];

		const r0 = F.dropWhile<number>(e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.dropWhile(e => e % 2 === 0, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4]);

		const r0 = F.dropWhile<number>(async e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.dropWhile(async e => (e % 2 === 0), a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('filter', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.filter<number>(async e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.filter(async e => e % 2 === 0, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([Promise.resolve(1), 2, 3, 4, 5]);

		const r0 = F.filter<number>(async e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.filter(async e => (e % 2 === 0), a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('map', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4];

		const r0 = F.map<number, number>((x) => x + x)(a);  // $ExpectType AsyncIterableIterator<number>
		const r1 = F.map(x => x + x, a);  // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4]);

		const r0 = F.map<number, number>(async x => x + x)(a);  // $ExpectType AsyncIterableIterator<number>
		const r1 = F.map(async x => x + x, a);  // $ExpectType AsyncIterableIterator<number>
	});
});

describe('fmap', () => {
	it('from Normal Value', () => {
		const a = [[0, 1], 1, 2, 3, 4];

		const r0 = F.fmap<number | number[], number>(e => e)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.fmap(e => e, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		type typeA = string | string[][] | Promise<string>[][];
		type typeB = AsyncIterableIterator<string | F.Iter<string>>;

		const a = F.seq(['h', 'e', 'l', [['l']], [[Promise.resolve('o')]]]);

		const r0 = F.fmap<typeA, typeB>(async e => F.fmap(async e1 => e1, e))(a); // $ExpectType AsyncIterableIterator<string>
		const r1 = F.fmap(async e => F.fmap(async e1 => F.fmap(async e2 => e2, e1), e), a); // $ExpectType AsyncIterableIterator<string>
	});
});

describe('flatMap', () => {
	it('from Normal Value', () => {
		const a = [[0, 1], 1, 2, 3, 4];

		const r0 = F.flatMap<number | number[], number>(e => e)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.flatMap(e => e, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		type typeA = string | string[][] | Promise<string>[][];
		type typeB = AsyncIterableIterator<string | F.Iter<string>>;

		const a = F.seq(['h', 'e', 'l', [['l']], [[Promise.resolve('o')]]]);

		const r0 = F.flatMap<typeA, typeB>(async e => F.flatMap(async e1 => e1, e))(a); // $ExpectType AsyncIterableIterator<string>
		const r1 = F.flatMap(async e => F.flatMap(async e1 => F.flatMap(async e2 => e2, e1), e), a); // $ExpectType AsyncIterableIterator<string>
	});
});

describe('flat', () => {
	it('from Normal Value', () => {
		const a = [1, [2, 3, [4, 5]], 6];

		const r0 = F.flat(a); // $ExpectType AsyncIterableIterator<number | number[]>
		const r1 = F.flat(r0); // $ExpectType AsyncIterableIterator<number>
        const r2 = F.flat(r1); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq(['he', 'l', [['l']], [[Promise.resolve('o')]]]);

		const r0 = F.flat(a); // $ExpectType AsyncIterableIterator<string | string[] | Promise<string>[]>
		const r1 = F.flat(r0); // $ExpectType AsyncIterableIterator<string>
		const r2 = F.flat(r1); // $ExpectType AsyncIterableIterator<string>
	});

	it('from String', () => {
		const a = 'helloworld';

		const r0 = F.flat(a); // $ExpectType AsyncIterableIterator<string>
		const r1 = F.flat(r0); // $ExpectType AsyncIterableIterator<string>
	});
});

describe('take', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4];

		const r0 = F.take(Infinity, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([Promise.resolve(1), 2, 3, 4]);

		const r0 = F.take(Infinity, a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('takeWhile', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.takeWhile<number>(e => e > 3)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.takeWhile((e) => e > 3, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([1, Promise.resolve(2), 3, 4, 5]);

		const r0 = F.takeWhile<number>(e => e > 3)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.takeWhile((e) => e > 3, a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('foldl', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldl<number>((acc, e) => acc + e)(0)(a); // $ExpectType number
		const r1 = await F.foldl<number>((acc, e) => acc + e)(0, a); // $ExpectType number
		const r2 = await F.foldl((acc, e) => acc + e, 0)(a); // $ExpectType number
		const r3 = await F.foldl((acc, e) => acc + e, 0, a); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const r0 = await F.foldl<number>(async (acc, e) => acc + e)(0)(a); // $ExpectType number
		const r1 = await F.foldl<number>(async (acc, e) => acc + e)(0, a); // $ExpectType number
		const r2 = await F.foldl<number>(async (acc, e) => acc + e, Promise.resolve(0))(a); // $ExpectType number
		const r3 = await F.foldl(async (acc, e) => acc + e, Promise.resolve(0), a); // $ExpectType number

		// const rrrr = await F.foldl<number>((acc, e) => acc + e)(Promise.resolve(0))(a);
	});
});

describe('foldl1', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldl1<number>((acc, e) => acc + e)(a); // $ExpectType number
		const r1 = await F.foldl1((acc, e) => acc + e, a); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.foldl1<number>(async (acc, e) => acc + e)(a); // $ExpectType number
		const r1 = await F.foldl1(async (acc, e) => acc + e, a); // $ExpectType number
	});
});

describe('reduce', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.reduce<number>((acc, e) => acc + e)(a); // $ExpectType number
		const r1 = await F.reduce((acc, e) => acc + e, a); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.reduce<number>(async (acc, e) => acc + e)(a); // $ExpectType number
		const r1 = await F.reduce(async (acc, e) => acc + e, a); // $ExpectType number
	});
});

describe('scanl', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.scanl<number>((b, c) => b + c)(0)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.scanl<number>((b, c) => b + c)(0, a); // $ExpectType AsyncIterableIterator<number>
		const r2 = F.scanl<number>((b, c) => b + c, 0)(a); // $ExpectType AsyncIterableIterator<number>
		const r3 = F.scanl((b, c) => b + c, 0, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const r0 = F.scanl<number>(async (b, c) => b + c)(Promise.resolve(0))(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.scanl<number>(async (b, c) => b + c)(Promise.resolve(0), a); // $ExpectType AsyncIterableIterator<number>
		const r2 = F.scanl<number>(async (b, c) => b + c, Promise.resolve(0))(a); // $ExpectType AsyncIterableIterator<number>
		const r3 = F.scanl(async (b, c) => b + c, Promise.resolve(0), a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('scanl1', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.scanl1<number>((b, c) => b + c)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.scanl1((b, c) => b + c, a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const r0 = F.scanl1<number>(async (b, c) => b + c)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.scanl1(async (b, c) => b + c, a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('reverse', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.reverse(a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const r0 = F.reverse(a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('foldr', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldr<number>((acc, e) => acc + e)(0)(a); // $ExpectType number
		const r1 = await F.foldr<number>((acc, e) => acc + e)(0, a); // $ExpectType number
		const r2 = await F.foldr<number>((acc, e) => acc + e, 0)(a); // $ExpectType number
		const r3 = await F.foldr((acc, e) => acc + e, 0, a); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const r0 = await F.foldr<number>(async (acc, e) => acc + e)(Promise.resolve(0))(a); // $ExpectType number
		const r1 = await F.foldr<number>(async (acc, e) => acc + e)(Promise.resolve(0), a); // $ExpectType number
		const r2 = await F.foldr<number>(async (acc, e) => acc + e, Promise.resolve(0))(a); // $ExpectType number
		const r3 = await F.foldr(async (acc, e) => acc + e, Promise.resolve(0), a); // $ExpectType number
	});
});

describe('foldr1', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldr1<number>((acc, e) => acc + e)(a); // $ExpectType number
		const r1 = await F.foldr1((acc, e) => acc + e, a); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.foldr1<number>(async (acc, e) => acc + e)(a); // $ExpectType number
		const r1 = await F.foldr1(async (acc, e) => acc + e, a); // $ExpectType number
	});
});

describe('zip', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];
		const b = ['a', 'b', 'c', 'd', 'e'];

		const r0 = F.zip<number, string>(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r1 = F.zip(a, b); // $ExpectType AsyncIterableIterator<[number, string]>
	});

	it('from Promise Value', () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];
		const b = ['a', Promise.resolve('b'), 'c', 'd', 'e'];

		const r0 = F.zip<number, string>(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r1 = F.zip(a, b); // $ExpectType AsyncIterableIterator<[number, string]>
	});
});

describe('zipWith', () => {
	it('from Normal Value', () => {
		const a = [{ id: 0 }, { id: 1 }, { id: 2 }];
		const b = [{ name: 'hong9802' }, { name: 'cenox' }, { name: 'gyungdal' }];

		const r0 = F.zipWith<{ id: number; }, { name: string; }, number, string>((a, b) => [a.id, b.name])(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r1 = F.zipWith<{ id: number; }, { name: string; }, number, string>((a, b) => [a.id, b.name])(a, b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r2 = F.zipWith<{ id: number; }, { name: string; }, number, string>((a, b) => [a.id, b.name], a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r3 = F.zipWith((a, b) => [a.id, b.name], a, b); // $ExpectType AsyncIterableIterator<[number, string]>
	});

	it('from Promise Value', () => {
		const a = [Promise.resolve({ id: 0 }), { id: 1 }, { id: 2 }];
		const b = [{ name: 'hong9802' }, { name: 'cenox' }, Promise.resolve({ name: 'gyungdal' })];

		const r0 = F.zipWith<{ id: number; }, { name: string; }, number, string>(async (a, b) => [a.id, b.name])(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r1 = F.zipWith<{ id: number; }, { name: string; }, number, string>(async (a, b) => [a.id, b.name])(a, b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r2 = F.zipWith<{ id: number; }, { name: string; }, number, string>(async (a, b) => [a.id, b.name], a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r3 = F.zipWith((a, b) => [a.id, b.name], a, b); // $ExpectType AsyncIterableIterator<[number, string]>
	});
});

///
/// stream.js
///
describe('rangeOf', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, [4, 5, [6]]];

		const r0 = F.rangeOf(...a); // $ExpectType AsyncIterableIterator<number | number[]>
	});

	it('from Promise Value', () => {
		const a = [1, 2, Promise.resolve(3), [4, Promise.resolve(5), [Promise.resolve(6)], [7]]];

		const r0 = F.rangeOf(...a); // $ExpectType AsyncIterableIterator<number | number[] | Promise<number>[]>
	});
});

describe('emptyThen', () => {
	it('from Normal Value', () => {
		const testSupplyFunc = (i: string[]) => () => i;

		const t = [] as number[];
		const y = ['he', 'll', 'o'];

		const r0 = F.emptyThen<number, string>(y)(t); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.emptyThen<number, string>(testSupplyFunc(y))(t); // $ExpectType AsyncIterableIterator<string | number>
		const r2 = F.emptyThen(y, t); // $ExpectType AsyncIterableIterator<string | number>
		const r3 = F.emptyThen(testSupplyFunc(y), t); // $ExpectType AsyncIterableIterator<string | number>
	});

	it('from Promise Value', () => {
		const testSupplyFunc = (i: (string | Promise<string>)[]) => async () => i;

		const t = [] as number[];
		const y = [Promise.resolve('he'), 'll', 'o'];

		const r0 = F.emptyThen<number, string>(y)(t); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.emptyThen<number, string>(testSupplyFunc(y))(t); // $ExpectType AsyncIterableIterator<string | number>
		const r2 = F.emptyThen(Promise.resolve(y), t); // $ExpectType AsyncIterableIterator<string | number>
		const r3 = F.emptyThen(testSupplyFunc(y), t); // $ExpectType AsyncIterableIterator<string | number>
	});
});

describe('collect', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.collect(a); // $ExpectType number[]
	});

	it('from Promise Value', async () => {
		const a = F.seq([Promise.resolve(1), 2, 3, 4, 5]);

		const r0 = await F.collect(a); // $ExpectType number[]
	});
});

describe('collectMap', () => {
	it('from Normal Value', async () => {
		const a = [['a', 0], ['b', 1], ['c', 2]];

		const r0 = await F.collectMap(a as [string, number][]); // $ExpectType Map<string, number>
	});

	it('from Promise Value', async () => {
		const a = F.seq([Promise.resolve(['a', 0]), ['b', 1], ['c', 2]]);

		// const r0 = await F.collectMap(a as (Promise<[string, number]> | [string, number])[])
		const r0 = await F.collectMap(a as AsyncIterableIterator<([string, number] | Promise<[string, number]>)>); // $ExpectType Map<string, number>
	});
});

describe('collectSet', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.collectSet(a); // $ExpectType Set<number>
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.collectSet(a); // $ExpectType Set<number>
	});
});

describe('distinctBy', () => {
	it('from Normal Value', () => {
		const a = [{ id: 1 }, { id: 1 }, { id: 2 }];

		const r0 = F.distinctBy<{ id: number }, number>(e => e.id)(a); // $ExpectType AsyncIterableIterator<{ id: number; }>
		const r1 = F.distinctBy(e => e.id, a); // $ExpectType AsyncIterableIterator<{ id: number; }>
	});

	it('from Promise Value', () => {
		const a = [Promise.resolve({ id: 1 }), Promise.resolve({ id: 1 }), { id: 2 }];

		const r0 = F.distinctBy<{ id: number; }, number>(async e => e.id)(a); // $ExpectType AsyncIterableIterator<{ id: number; }>
		const r1 = F.distinctBy(async e => e.id, a); // $ExpectType AsyncIterableIterator<{ id: number; }>
	});
});

describe('distinct', () => {
	it('from Normal Value', () => {
		const a = [1, 1, 1, 2, 3];

		const r0 = F.distinct(a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		const a = [Promise.resolve(1), Promise.resolve(1), 1, Promise.resolve(2), 3];

		const r0 = F.distinct(a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('maxBy', () => {
	it('from Normal Value', async () => {
		const a = [{ id: 1 }, { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.maxBy<{ id: number; }, number>(e => e.id)(a); // $ExpectType { id: number; }
		const r1 = await F.maxBy(e => e.id, a); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve({ id: 1 }), { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.maxBy<{ id: number; }, number>(e => e.id)(a); // $ExpectType { id: number; }
		const r1 = await F.maxBy(async e => e.id, a); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
	});
});

describe('minBy', () => {
	it('from Normal Value', async () => {
		const a = [{ id: 1 }, { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.minBy<{ id: number; }, number>(e => e.id)(a); // $ExpectType { id: number; }
		const r1 = await F.minBy(e => e.id, a); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve({ id: 1 }), { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.minBy<{ id: number; }, number>(e => e.id)(a); // $ExpectType { id: number; }
		const r1 = await F.minBy(async e => e.id, a); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
	});
});

describe('count', () => {
	it('', async () => {
		const a = [1, 2, 3, 4, 5, 6, 7, 8];

		const r0 = await F.count(a); // $ExpectType number
	});
});

describe('sum', () => {
	it('from Normal Number', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.sum(a); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = [Promise.resolve(1), 2, 3, 4, 5];

		const r0 = await F.sum(a); // $ExpectType number
	});

	it('from String', async () => {
		const a = 'helloworld';

		const r0 = await F.sum(a); // $ExpectType string
	});

	it('from Promise String Array', async () => {
		const a = [Promise.resolve('h'), 'ello'];

		const r0 = await F.sum(a);
	});
});

describe('max', () => {
	it('from Normal Number', async () => {
		const a = [1, 5, 2, 4, 3];

		const r0 = await F.max(a); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = ['he', Promise.resolve('ll'), 'o'];

		const r0 = await F.max(a); // $ExpectType string
	});

	it('from String', async () => {
		const a = 'helloworld';

		const r0 = await F.max(a); // $ExpectType string
	});
});

describe('min', () => {
	it('from Normal Number', async () => {
		const a = [1, 5, 2, 4, 3];

		const r0 = await F.min(a); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = ['he', Promise.resolve('ll'), 'o'];

		const r0 = await F.min(a); // $ExpectType string
	});

	it('from String', async () => {
		const a = 'helloworld';

		const r0 = await F.min(a); // $ExpectType string
	});
});

describe('average', () => {
	it('from Normal Number', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.average(a); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = [Promise.resolve(1), 2, 3, 4, 5];

		const r0 = await F.average(a); // $ExpectType number
	});
});

describe('splitBy', () => {
	it('from Normal Value', () => {
		// const a = [1,2,3,4,5];
		const a = [1, 2, 3, 4];

		const r0 = F.splitBy<number[], number | number[]>(e => [e, 0])(a); // $ExpectType AsyncIterableIterator<number | number[]>
		const r1 = F.splitBy(e => [0, e], a); // $ExpectType AsyncIterableIterator<number | number[]>
	});

	it('from String', () => {
		const a = 'hello world';

		const r0 = F.splitBy<string, string>(e => e.split(' '))(a); // $ExpectType AsyncIterableIterator<string>
		const r1 = F.splitBy(e => e.split(' '), a); // $ExpectType AsyncIterableIterator<string>
	});

	it('to PromiseFunc', () => {
		const a = 1;

		const ar0 = F.splitBy<number, number>(async e => [e, 0])(a); // $ExpectType AsyncIterableIterator<number>
		const ar1 = F.splitBy(async e => [0, e], a); // $ExpectType AsyncIterableIterator<number>

		const b = 'hello world';

		const br0 = F.splitBy<string, string>(async e => e.split(' '))(b); // $ExpectType AsyncIterableIterator<string>
		const br1 = F.splitBy(async e => e.split(' '), b); // $ExpectType AsyncIterableIterator<string>
	});
});

describe('errorThen', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.errorThen<number, string>(['error'])(a); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.errorThen(['error'], a); // $ExpectType AsyncIterableIterator<string | number>
	});

	it('from Normal Value With Error Handle Function', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.errorThen<number, string>((error) => ['error'])(a); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.errorThen((error) => ['error'], a); // $ExpectType AsyncIterableIterator<string | number>
	});

	it('from Normal Value With Promise Error Handle Function', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.errorThen<number, string>((error) => ['error'])(a); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.errorThen(Promise.resolve((error) => ['error']), a); // $ExpectType AsyncIterableIterator<string | number>
	});

	it('from Promise Value', () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = F.errorThen<number, string>(Promise.resolve(F.seq(['error'])))(a); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.errorThen(Promise.resolve(F.seq(['error'])), a); // $ExpectType AsyncIterableIterator<string | number>
	});

	it('from Promise Value With Error Handle Function', () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const r0 = F.errorThen<number, string>(async (error) => F.seq(['error']))(a); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.errorThen(async (error) => F.seq(['error']), a); // $ExpectType AsyncIterableIterator<string | number>
	});

	it('from Promise Value With Promise Error Handle Function', () => {
		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const r0 = F.errorThen<number, string>(Promise.resolve(async (error) => F.seq(['error'])))(a); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.errorThen(Promise.resolve(async (error) => F.seq(['error'])), a); // $ExpectType AsyncIterableIterator<string | number>
	});
});

describe('then', () => {
	it('from Normal Value', () => {
		const generatorFunction = function *(iter: Iterable<number>) {
			for (const e of iter) {
			yield e;
			}
		};

		const a = [1, 2, 3, 4, 5];

		// const r0 = F.then(iter => iter)(a); // unknown;
		const ar0 = F.then(generatorFunction)(a); // $ExpectType IterableIterator<number>
		const ar1 = F.then(generatorFunction, a); // $ExpectType IterableIterator<number>

		const br0 = F.then<number[], number[]>(iter => iter)(a); // $ExpectType number[]
		const br1 = F.then(iter => iter, a); // $ExpectType number[]
	});

	it('from Normal Value With Return Void', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.then<number[], void>(() => F.fnothing())(a); // $ExpectType void
		const r1 = F.then(() => F.fnothing(), a); // $ExpectType void
	});

	it('from Promise Value', async () => {
		const generatorFunction = async function *(iter: AsyncIterable<number | Promise<number>>) {
			for await (const e of iter) {
			yield await e;
			}
		};

		const a = F.seq([1, 2, Promise.resolve(3), 4, 5]);

		const ar0 = F.then(generatorFunction)(a); // $ExpectType AsyncIterableIterator<number>
		const ar1 = F.then(generatorFunction, a); // $ExpectType AsyncIterableIterator<number>

		const br0 = await F.then<AsyncIterableIterator<number | Promise<number>>, Promise<AsyncIterableIterator<number | Promise<number>>>>(async iter => iter)(a); // $ExpectType AsyncIterableIterator<number | Promise<number>>
		const br1 = await F.then(async iter => iter, a); // $ExpectType AsyncIterableIterator<number | Promise<number>>
	});

	it('from Promise Value With Return Void', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.then<(number | Promise<number>)[], Promise<void>>(async () => F.fnothing())(a); // $ExpectType void
		const r1 = await F.then(async () => F.fnothing(), a); // $ExpectType void
	});
});

describe('buffer', () => {
	it('from Normal Value', () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.buffer<number>(1)(a); // $ExpectType AsyncIterableIterator<[number]>
		const r1 = F.buffer(2, a); // $ExpectType AsyncIterableIterator<[number]>
	});

	it('from Promise Value', () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = F.buffer<number>(1)(a); // $ExpectType AsyncIterableIterator<[number]>
		const r1 = F.buffer(2, a); // $ExpectType AsyncIterableIterator<[number]>
	});
});

///
/// tsql.js
///
describe('groupBy', () => {
	it('from Object Array', async () => {
		const a = [{ type: 'human', name: 'syrflover' }, { type: 'kinggod', name: 'gyungdal' }, { type: 'human', name: 'cenox' }];

		const r0 = await F.groupBy<string, { type: string; name: string; }>(e => e.type)(a); // $ExpectType Map<string, { type: string; name: string; }[]>
		const r1 = await F.groupBy(e => e.type, a); // $ExpectType Map<string, { type: string; name: string; }[]>
	});

	it('from Array', async () => {
		const a = ['h', 1, 'e', 2, 'l', 3, 'l', 4, 'o', 5];

		const r0 = await F.groupBy<'string' | 'number', string | number>(e => typeof e === 'string' ? 'string' : 'number')(a); // $ExpectType Map<"string" | "number", (string | number)[]>
		const r1 = await F.groupBy(e => typeof e === 'string' ? 'string' : 'number', a); // $ExpectType Map<"string" | "number", (string | number)[]>
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ type: 'human', name: 'syrflover' }), { type: 'kinggod', name: 'gyungdal' }, { type: 'human', name: 'cenox' }];

		const r0 = await F.groupBy<string, { type: string; name: string; }>(async e => e.type)(a); // $ExpectType Map<string, { type: string; name: string; }[]>
		const r1 = await F.groupBy(async e => e.type, a); // $ExpectType Map<string, ({ type: string; name: string; } | { type: string; name: string; })[]>
		// Map<string, { type: string; name: string; }>
	});

	it('from Promise Array', async () => {
		const a = ['h', 1, Promise.resolve('e'), 2, 'l', Promise.resolve(3), 'l', 4, 'o', 5];
		// const b = [1,2,3,Promise.resolve(4),5];
		// const c = [Promise.resolve('h'), 'ello']

		const r0 = await F.groupBy<'string' | 'number', string | number>(e => typeof e === 'string' ? 'string' : 'number')(a); // $ExpectType Map<"string" | "number", (string | number)[]>
		const r1 = await F.groupBy(async e => typeof e === 'string' ? 'string' : 'number', a); // $ExpectType Map<"string" | "number", (string | number)[]>
	});
});

describe('concat', () => {
	it('from Array', () => {
		const a = [1, 2, 3];
		const b = [3, 2, 1];

		const r0 = F.concat<number, number>(a)(b); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<number>
	});

	it('from String', () => {
		const a = 'hello';
		const b = 'world';

		const r0 = F.concat<string, string>(a)(b); // $ExpectType AsyncIterableIterator<string>
		const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<string>
	});

	it('from Array And String', () => {
		const a = [1, 2, 3];
		const b = 'helloworld';

		const ar0 = F.concat<number, string>(a)(b); // $ExpectType AsyncIterableIterator<string | number>
		const ar1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<string | number>

		const br0 = F.concat<string, number>(b)(a); // $ExpectType AsyncIterableIterator<string | number>
		const br1 = F.concat(b, a); // $ExpectType AsyncIterableIterator<string | number>
	});

	it('from Promise Value', () => {
		const a = [Promise.resolve(1), 2, 3];
		const b = [3, Promise.resolve(2), 1];

		const r0 = F.concat<number, number>(a)(b); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('innerJoin', () => {
	it('from Map Array', async () => {
		const a = [
			// new Map([['id', 1], ['name', 'CenoX']]) as Map<string, string | number>,
			// new Map([['id', 2], ['name', 'SacredPigeon']]) as Map<string, string | number>,
			new Map() as Map<string, string | number>,
			new Map() as Map<string, string | number>,
		];
		const b = [
			new Map([['id', 1], ['length', 3]]),
			new Map([['id', 2], ['length', 4]]),
		];

		const r0 = F.innerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a)(b);
		const r1 = F.innerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a, b);
		const r2 = F.innerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true, a)(b);
		const r3 = F.innerJoin((a, b) => true, a, b);

		const rr0 = await F.collect(r0);
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1);
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2);
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3);
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.innerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);
		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ id: 1, name: 'syrflover' }), { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, Promise.resolve({ id: 3, length: 12 })];

		const r0 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a)(b);
		const r1 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a, b);
		const r2 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id, a)(b);
		const r3 = F.innerJoin(async (a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);
		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string
	});

/* 	it('from Custom Iterable + set Method', () => {
		class CustomIterable<T, Y> {
			constructor(id?: number) {
				this.id = id || 0;
				this.m = new Map<T, Y>();
			}
			[Symbol.iterator]() {
				return this.m.entries();
			}
			id: number;
			m: Map<T, Y>;

			set(k: T, v: Y) {
				this.m.set(k, v);
			}
		}

		type isIter<T> = T extends F.Iter<infer X> ? T : unknown;
		type isIterTest1 = isIter<CustomIterable<string, string>>;
		type isIterTest2 = isIter<number>;

		const c0 = new CustomIterable<string, string>(1);
		const c1 = new CustomIterable<string, number>(1);

		c0.set('k1', 'v1');
		c0.set('k2', 'v2');
		c1.set('k2', 2);
		c1.set('k3', 3);

		const a = [c0];
		const b = [c1];

		const r2 = F.innerJoin<CustomIterable<string, string>>
		const r3 = F.innerJoin<CustomIterable<string, string>, CustomIterable<string, number>>((a, b) => a.id === b.id, a, b);

		const rr3 = await F.collect(r3);

		// I want Map<string, string | number>
		rr3[0].m; // ExpectType Map<string, string>
	}) */

/* 	it('from String', () => {
		const a = 'Etiam elementum iaculis ipsum a vehicula. Donec pellentesque rutrum laoreet. Praesent a lectus neque. Maecenas bibendum nulla commodo felis pharetra dapibus. Pellentesque ipsum lorem, mollis molestie venenatis vitae, pulvinar vitae mauris. Pellentesque feugiat orci sed justo pulvinar cursus. Sed placerat lacus sit amet lectus rhoncus, non dapibus sem sollicitudin. In varius lectus at ante commodo faucibus.';
		const b = 'Morbi lorem mi, congue in viverra id, auctor nec magna. Ut lectus leo, scelerisque ac placerat ut, scelerisque quis dui. Aenean ut tempor augue. Nulla fermentum leo id risus consequat aliquam. Nam non feugiat neque, sed maximus ipsum. Maecenas consectetur convallis ornare. Nunc egestas non massa in sagittis. Pellentesque rhoncus lacinia pretium. Maecenas viverra risus at tellus rhoncus rhoncus. Mauris quis ligula facilisis, placerat turpis nec, finibus elit. Proin cursus lectus nibh, eget finibus justo scelerisque eu. Suspendisse in facilisis nunc. In sollicitudin eget sem et sodales.';

		const r3 = F.innerJoin((a, b) => a === b, a, b);
	}) */
});

describe('leftInnerJoin', () => {
	it('from Map Array', async () => {
		const a = [
			// new Map([['id', 1], ['name', 'CenoX']]) as Map<string, string | number>,
			// new Map([['id', 2], ['name', 'SacredPigeon']]) as Map<string, string | number>,
			new Map() as Map<string, string | number>,
			new Map() as Map<string, string | number>,
		];
		const b = [
			new Map([['id', 1], ['length', 3]]),
			new Map([['id', 2], ['length', 4]]),
		];

		const r0 = F.leftInnerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a)(b);
		const r1 = F.leftInnerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a, b);
		const r2 = F.leftInnerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true, a)(b);
		const r3 = F.leftInnerJoin((a, b) => true, a, b);

		const rr0 = await F.collect(r0);
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1);
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2);
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3);
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.leftInnerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);
		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ id: 1, name: 'syrflover' }), { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, Promise.resolve({ id: 3, length: 12 })];

		const r0 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a)(b);
		const r1 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a, b);
		const r2 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id, a)(b);
		const r3 = F.leftInnerJoin(async (a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);
		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string
	});
});

describe('rightInnerJoin', () => {
	it('from Map Array', async () => {
		const a = [
			// new Map([['id', 1], ['name', 'CenoX']]) as Map<string, string | number>,
			// new Map([['id', 2], ['name', 'SacredPigeon']]) as Map<string, string | number>,
			new Map() as Map<string, string | number>,
			new Map() as Map<string, string | number>,
		];
		const b = [
			new Map([['id', 1], ['length', 3]]),
			new Map([['id', 2], ['length', 4]]),
		];

		const r0 = F.rightInnerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a)(b);
		const r1 = F.rightInnerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a, b);
		const r2 = F.rightInnerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true, a)(b);
		const r3 = F.rightInnerJoin((a, b) => true, a, b);

		const rr0 = await F.collect(r0);
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1);
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2);
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3);
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.rightInnerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);
		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ id: 1, name: 'syrflover' }), { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, Promise.resolve({ id: 3, length: 12 })];

		const r0 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a)(b);
		const r1 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a, b);
		const r2 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id, a)(b);
		const r3 = F.rightInnerJoin(async (a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);
		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string
	});
});

describe('outerJoin', () => {
	it('from Map Array', async () => {
		const a = [
			// new Map([['id', 1], ['name', 'CenoX']]) as Map<string, string | number>,
			// new Map([['id', 2], ['name', 'SacredPigeon']]) as Map<string, string | number>,
			new Map() as Map<string, string | number>,
			new Map() as Map<string, string | number>,
		];
		const b = [
			new Map([['id', 1], ['length', 3]]),
			new Map([['id', 2], ['length', 4]]),
		];

		const r0 = F.outerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a)(b);
		const r1 = F.outerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a, b);
		const r2 = F.outerJoin<Map<string, string | number>, Map<string, number>>((a, b) => true, a)(b);
		const r3 = F.outerJoin((a, b) => true, a, b);

		const rr0 = await F.collect(r0);
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1);
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2);
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3);
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.outerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);

		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number | undefined
		rr3[0].name; // $ExpectType string
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ id: 1, name: 'syrflover' }), { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, Promise.resolve({ id: 3, length: 12 })];

		const r0 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a)(b);
		const r1 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a, b);
		const r2 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id, a)(b);
		const r3 = F.outerJoin(async (a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);

		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number | undefined
		rr3[0].name; // $ExpectType string
	});
});

describe('leftOuterJoin', () => {
	it('from Map Array', async () => {
		const a = [
			// new Map([['id', 1], ['name', 'CenoX']]) as Map<string, string | number>,
			// new Map([['id', 2], ['name', 'SacredPigeon']]) as Map<string, string | number>,
			new Map() as Map<string, string | number>,
			new Map() as Map<string, string | number>,
		];
		const b = [
			new Map([['id', 1], ['length', 3]]),
			new Map([['id', 2], ['length', 4]]),
		];

		const r0 = F.leftOuterJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a)(b);
		const r1 = F.leftOuterJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a, b);
		const r2 = F.leftOuterJoin<Map<string, string | number>, Map<string, number>>((a, b) => true, a)(b);
		const r3 = F.leftOuterJoin((a, b) => true, a, b);

		const rr0 = await F.collect(r0);
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1);
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2);
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3);
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.leftOuterJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);

		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number | undefined
		rr3[0].name; // $ExpectType string
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ id: 1, name: 'syrflover' }), { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, Promise.resolve({ id: 3, length: 12 })];

		const r0 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a)(b);
		const r1 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a, b);
		const r2 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id, a)(b);
		const r3 = F.leftOuterJoin(async (a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1);

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2);

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3);

		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number | undefined
		rr3[0].name; // $ExpectType string
	});
});

describe('rightOuterJoin', () => {
	it('from Map Array', async () => {
		const a = [
			// new Map([['id', 1], ['name', 'CenoX']]) as Map<string, string | number>,
			// new Map([['id', 2], ['name', 'SacredPigeon']]) as Map<string, string | number>,
			new Map() as Map<string, string | number>,
			new Map() as Map<string, string | number>,
		];
		const b = [
			new Map([['id', 1], ['length', 3]]),
			new Map([['id', 2], ['length', 4]]),
		];

		const r0 = F.rightOuterJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a)(b);
		const r1 = F.rightOuterJoin<Map<string, string | number>, Map<string, number>>((a, b) => true)(a, b);
		const r2 = F.rightOuterJoin<Map<string, string | number>, Map<string, number>>((a, b) => true, a)(b);
		const r3 = F.rightOuterJoin((a, b) => true, a, b);

		const rr0 = await F.collect(r0);
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1);
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2);
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3);
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.rightOuterJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string | undefined

		const rr1 = await F.collect(r1);

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string | undefined

		const rr2 = await F.collect(r2);

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string | undefined

		const rr3 = await F.collect(r3);

		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string | undefined
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ id: 1, name: 'syrflover' }), { id: 2, name: 'GyungDal' }];
		const b = [{ id: 1, length: 8 }, Promise.resolve({ id: 3, length: 12 })];

		const r0 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a)(b);
		const r1 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id)(a, b);
		const r2 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>(async (a, b) => a.id === b.id, a)(b);
		const r3 = F.rightOuterJoin(async (a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0);

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string | undefined

		const rr1 = await F.collect(r1);

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string | undefined

		const rr2 = await F.collect(r2);

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string | undefined

		const rr3 = await F.collect(r3);

		rr3[0].id; // $ExpectType number
		rr3[0].length; // $ExpectType number
		rr3[0].name; // $ExpectType string | undefined
	});
});

///
/// timer.js
///
describe('sleep', () => {
	it('', async () => {
		await F.sleep(50);
	});
});

describe('withTimeout', () => {
	it('from Normal Duration', () => {
		const testDurationFunction = (t: number) => () => t;

		const a = F.map(async e => {
			await F.sleep(5);
			return e;
		}, [1, 2, 3, 4, 5]);

		const r0 = F.withTimeout<number>(50)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.withTimeout<number>(testDurationFunction(50))(a); // $ExpectType AsyncIterableIterator<number>
		const r2 = F.withTimeout(50, a); // $ExpectType AsyncIterableIterator<number>
		const r3 = F.withTimeout(testDurationFunction(50), a); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Duration', () => {
		const testDurationFunction = (t: number) => async () => t;

		const a = [1, 2, 3, Promise.resolve(4), 5];
		const r0 = F.withTimeout<number>(50)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.withTimeout<number>(testDurationFunction(50))(a); // $ExpectType AsyncIterableIterator<number>
		const r2 = F.withTimeout(50, a); // $ExpectType AsyncIterableIterator<number>
		const r3 = F.withTimeout(testDurationFunction(50), a); // $ExpectType AsyncIterableIterator<number>
	});
});

describe('timeout', () => {
	it('from Normal Duration', async () => {
		const testDurationFunction = (t: number) => () => t;

		const testTimeoutFuncA = async (t: number) => {
			await F.sleep(t);
			return 'hello';
		};

		const testTimeoutFuncB = async (t: number) => {
			await F.sleep(t);
			return (async function *() {
				let i = 0;
				yield i;
				i++;
			})();
		};

		try {
			const ar0 = await F.timeout<string>(50)(testTimeoutFuncA(42)); // $ExpectType string
			const ar1 = await F.timeout<string>(testDurationFunction(50))(testTimeoutFuncA(43)); // $ExpectType string
			const ar2 = await F.timeout(50, testTimeoutFuncA(48)); // $ExpectType string
			const ar3 = await F.timeout(testDurationFunction(50), testTimeoutFuncA(46)); // $ExpectType string

			const br0 = await F.timeout<AsyncIterableIterator<number>>(38)(testTimeoutFuncB(27)); // $ExpectType AsyncIterableIterator<number>
			const br1 = await F.timeout<AsyncIterableIterator<number>>(testDurationFunction(49))(testTimeoutFuncB(84)); // $ExpectType AsyncIterableIterator<number>
			const br2 = await F.timeout(53, testTimeoutFuncB(23)); // $ExpectType AsyncIterableIterator<number>
			const br3 = await F.timeout(testDurationFunction(59), testTimeoutFuncB(51)); // $ExpectType AsyncIterableIterator<number>
		} catch (e) {
			if (e.message !== 'timeout error') {
				cerror(e);
			}
		}
	});

	it('from Promise Duration', async () => {
		const testDurationFunction = (t: number) => async () => t;

		const testTimeoutFuncA = async (t: number) => {
			await F.sleep(t);
			return 'hello';
		};

		const testTimeoutFuncB = async (t: number) => {
			await F.sleep(t);
			return (async function *() {
				let i = 0;
				yield i;
				i++;
			})();
		};

		try {
			const ar0 = await F.timeout<string>(50)(testTimeoutFuncA(42)); // $ExpectType string
			const ar1 = await F.timeout<string>(testDurationFunction(50))(testTimeoutFuncA(43)); // $ExpectType string
			const ar2 = await F.timeout(50, testTimeoutFuncA(48)); // $ExpectType string
			const ar3 = await F.timeout(testDurationFunction(50), testTimeoutFuncA(46)); // $ExpectType string

			const br0 = await F.timeout<AsyncIterableIterator<number>>(38)(testTimeoutFuncB(27)); // $ExpectType AsyncIterableIterator<number>
			const br1 = await F.timeout<AsyncIterableIterator<number>>(testDurationFunction(49))(testTimeoutFuncB(84)); // $ExpectType AsyncIterableIterator<number>
			const br2 = await F.timeout(53, testTimeoutFuncB(23)); // $ExpectType AsyncIterableIterator<number>
			const br3 = await F.timeout(testDurationFunction(59), testTimeoutFuncB(51)); // $ExpectType AsyncIterableIterator<number>
		} catch (e) {
			if (e.message !== 'timeout error') {
				cerror(e);
			}
		}
	});
});

describe('interval', () => {
	it('', () => {
		let intervalCount = 0;

		const r0 = F.interval(1000, async () => {
			await F.run(F.range(5), F.then(async _ => {
				/// work
				intervalCount++;
				if (process && intervalCount >= 8) {
					process.exit(0);
				}
				return;
			}));
		});
		r0.run; // $ExpectType boolean
	});
});

describe('rangeInterval', () => {
	it('', () => {
		F.rangeInterval(1000, 500); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(Promise.resolve(1000), 500); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(() => 1000, 500); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(async () => 1000, 500); // $ExpectType AsyncIterableIterator<number>

		F.rangeInterval(1000, 500, 800); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(Promise.resolve(1000), 500, 800); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(() => 1000, 500, 800); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(async () => 1000, 500, 800); // $ExpectType AsyncIterableIterator<number>

		F.rangeInterval(1000, 500, 0, -1); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(Promise.resolve(1000), 500, 0, -1); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(() => 1000, 500, 0, -1); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(async () => 1000, 500, 0, -1); // $ExpectType AsyncIterableIterator<number>
	});
});

//
// generator.js
//
describe('repeat', () => {
	it('from Normal Value', () => {
		const r0 = F.repeat('hello'); // $ExpectType AsyncIterableIterator<string>
		const r1 = F.repeat(() => 'hello'); // $ExpectType AsyncIterableIterator<string>
	});

	it('from Promise Value', () => {
		const r0 = F.repeat(Promise.resolve('world')); // $ExpectType AsyncIterableIterator<string>
		const r1 = F.repeat(async () => 'world'); // $ExpectType AsyncIterableIterator<string>
	});
});

describe('range', () => {
	it('', () => {
		const r0 = F.range(500); // $ExpectType IterableIterator<number>
		const r1 = F.range(500, 800); // $ExpectType IterableIterator<number>
		const r2 = F.range(10, 0, -1); // $ExpectType IterableIterator<number>
	});
});

describe('iterate', () => {
	it('from Normal Value', () => {
		// const r0 = F.iterate<number>(e => e + 1)(0);
		const r0 = F.iterate(F.inc, 0); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.iterate(F.inc, 0); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value', () => {
		// const r0 = F.iterate(F.inc)(Promise.resolve(0));
		const r0 = F.iterate<number>(F.inc)(Promise.resolve(0)); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.iterate(F.inc, Promise.resolve(0)); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Normal Array', () => {
		const fibo = (a: number[]) => [a[1], a[0] + a[1]];

		const r0 = F.iterate<number[]>(fibo)([0, 1]); // $ExpectType AsyncIterableIterator<number[]>
		const r1 = F.iterate(fibo, [0, 1]); // $ExpectType AsyncIterableIterator<number[]>
	});

	it('from Promise Array', () => {
		const fibo = (a: number[]) => [a[0], a[0] + a[1]];

		const r0 = F.iterate<number[]>(fibo)(Promise.resolve([0, 1])); // $ExpectType AsyncIterableIterator<number[]>
		const r1 = F.iterate(fibo, Promise.resolve([0, 1])); // $ExpectType AsyncIterableIterator<number[]>
	});
});
