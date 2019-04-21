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

declare const console: any;

const cerror = (...a: any[]) => {
	if (console) {
		console.error(...a);
	}
};

/* const clog = (...a: any[]) => {
	if (console) {
		console.log(...a);
	}
}; */

const describe = (str: string, f: () => any) => {
    f();
};

const it = (str: string, f: () => any) => {
	f();
};

// tslint:disable-next-line: no-unnecessary-generics
const ifNilThrow = <T>(e: Error) => (v: T): T => {
    // console.log(v);
    if (F.notNil(v)) {
        return v;
    }
    e.message = 'some value is null | undefined | NaN';

    throw e;
};

//
// core.js
//
describe('util functions', () => {
	it('seq', () => {
		const range0 = F.range(0, 5, 1); // $ExpectType IterableIterator<number>
		const range1 = F.range(5); // $ExpectType IterableIterator<number>

		const seq0 = F.seq(['1', '2', '3', '4']); // $ExpectType AsyncIterableIterator<string>
		const seq1 = F.seq(range1); // $ExpectType AsyncIterableIterator<number>
		const seq2 = F.seq(seq1); // $ExpectType AsyncIterableIterator<number>
        const seq3 = F.seq('hello'); // $ExpectType AsyncIterableIterator<string>
        const seq4 = F.seq([Promise.resolve(1), 2, 3, 4]); // $ExpectType AsyncIterableIterator<number>
	});

	it('ioe', () => {
		const ioe = F.ioe(null); // $ExpectType null
    });

    it('fnothing', () => {
        const fnothing = F.fnothing(); // $ExpectType void
    });

	it('add', () => {
		const add0 = F.add('1', '2'); // $ExpectType string
		const add1 = F.add(1, 2); // $ExpectType number
    });

    it('sub', () => {
        const sub0 = F.sub(2, 1); // $ExpectType number
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
	it('iter', async () => {
		const a = [1, 2, 3, Promise.resolve(4), 5, 6];
		const b = [1, 2, Promise.resolve(3), [4, Promise.resolve(5)]];
		const c = [1, 2, 3, 4, 5];
		const d = [5, 4, 3, 2, 1];
		const e = ['hello', ['w', Promise.resolve('o'), 'rld']];

		const run1 = await F.run(a, F.map(F.inc)).then(ifNilThrow(new Error()));
		const run2 = await F.run(b, F.flat, F.map(e => e - e)).then(ifNilThrow(new Error()));
		const run3 = await F.run(c, F.map(F.inc), F.take(100), F.foldl1((acc, e) => acc + e)).then(ifNilThrow(new Error()));
		const run4 = await F.run(c, F.map(e => e ** e), F.take(10), F.map(e => e % 2), F.average).then(ifNilThrow(new Error()));
		const run5 = await F.run(F.range(50000), F.map(e => e * 2), F.filter(e => e % 2 === 0), F.take(200), F.reverse, F.foldr1(F.sub)).then(ifNilThrow(new Error()));
        const run6 = await F.run(e, F.flat, F.flat, F.filter(e => (e === 'l') || (e === 'h')), F.foldl1(F.add)).then(ifNilThrow(new Error()));
        const run7 = await F.run(F.range(Infinity), F.map(F.inc), F.map(e => e * 0.5), F.take(200), F.max).then(ifNilThrow(new Error()));
        const run8 = await F.run(F.range(Infinity), F.map(F.inc), F.map(e => e * 0.5), F.take(200), F.min).then(ifNilThrow(new Error()));
        const run9 = await F.run(F.range(Infinity), F.map(F.inc), F.map(e => e * 0.5), F.take(200), F.sum, (e) => F.add(e, e)).then(ifNilThrow(new Error()));
        const run10 = await F.run(F.range(Infinity), F.map(F.inc), F.map(e => e * 0.5), F.take(200), F.average).then(ifNilThrow(new Error()));
        const run11 = await F.run(e, F.flat, F.flat, F.max).then(ifNilThrow(new Error()));
        const run12 = await F.run(e, F.flat, F.flat, F.min).then(ifNilThrow(new Error()));
        const run13 = await F.run(e, F.flat, F.flat, F.sum).then(ifNilThrow(new Error()));
    });

    it('normal', async () => {
        const run1 = await F.run(1, e => e + 1).then(ifNilThrow(new Error()));
        const run2 = await F.run({a: 1, b: 2, c: 3}, e => ({ a: e.a, ...e }), e => ({ b: e.b, ...e })).then(ifNilThrow(new Error()));
    });
});

describe('head', () => {
	it('from Normal Value', async () => {
		const a = [10, 9, 8, 7];

		const r0 = await F.head(a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [10, Promise.resolve(9), 8, 7];

		const r0 = await F.head(a).then(ifNilThrow(new Error())); // $ExpectType number
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.head(a).then(ifNilThrow(new Error())); // $ExpectType string
    });

    it('from Normal / Promise Value Union', async () => {
        const a = [1, Promise.resolve('a'), Promise.resolve(2), 'b'];

        const r0 = await F.head(a).then(ifNilThrow(new Error())); // $ExpectType string | number
    });
});

describe('tail', () => {
	it('from Normal Value', async () => {
		const a = [10, 9, 8, 7];

        const r0 = F.tail(a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [10, 9, Promise.resolve(8), 7];

        const r0 = F.tail(a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.tail(a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = F.tail(a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });
});

describe('drop', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.drop<number>(2)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.drop(2, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, 3, Promise.resolve(4), 5];

		const r0 = F.drop<number>(2)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.drop(2, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.drop<string>(2)(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.drop(2, a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [Promise.resolve(1), 2, 'a', Promise.resolve('b')];

        const r0 = F.drop<string | number>(2)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.drop(2, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('dropWhile', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4];

		const r0 = F.dropWhile<number>(e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.dropWhile(e => e % 2 === 0, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4];

		const r0 = F.dropWhile<number>(async e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.dropWhile(async e => e % 2 === 0, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.dropWhile<string>(e => e === '0')(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.dropWhile(e => e === 'o', a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [Promise.resolve(1), 2, 'a', Promise.resolve('b')];

        const r0 = F.dropWhile<string | number>(e => e === 1)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.dropWhile(e => e === 1, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('filter', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.filter<number>(async e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.filter(async e => e % 2 === 0, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve(1), 2, 3, 4, 5];

		const r0 = F.filter<number>(async e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.filter(async e => (e % 2 === 0), a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.filter<string>(e => e === 'l')(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.filter(e => e === 'l', a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = F.filter<string | number>(e => e === 'a')(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.filter(e => e === 'a', a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('map', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4];

		const r0 = F.map<number, number>((x) => x + x)(a);  // $ExpectType AsyncIterableIterator<number>
        const r1 = F.map(x => x + x, a);  // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4];

		const r0 = F.map<number, number>(async x => x + x)(a);  // $ExpectType AsyncIterableIterator<number>
        const r1 = F.map(async x => x + x, a);  // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.map<string, string>(e => e + e)(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.map(e => e + e, a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [Promise.resolve(1), 2, 'a', Promise.resolve('b')];

        const r0 = F.map<string | number, string | number>(e => e)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.map(e => e, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('fmap', () => {
	it('from Normal Value', async () => {
		const a = [[1], [2], [3], [4], [5]];

		const r0 = F.fmap<typeof a, number>(e => e)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.fmap(e => e, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [[1], [Promise.resolve(2)], Promise.resolve([3]), [4], [5]];

		const r0 = F.fmap<typeof a, number>(async e => F.fmap(async e1 => e1, e))(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.fmap(async e => F.fmap(async e1 => F.fmap(async e2 => e2, e1), e), a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.fmap<typeof a, string>(e => F.fmap(e1 => e1, e))(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.fmap(e => F.fmap(e1 => e1, e), a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [[1], [Promise.resolve('a')], [2], [Promise.resolve(3)], Promise.resolve([4]), Promise.resolve(['b'])];

        const r0 = F.fmap<typeof a, number[] | string[] | Promise<string>[] | Promise<number>[]>(e => e)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.fmap(e => e, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('flatMap', () => {
	it('from Normal Value', async () => {
		const a = [[1], [2], [3], [4], [5]];

		const r0 = F.fmap<typeof a, number>(e => e)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.fmap(e => e, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [[1], [Promise.resolve(2)], Promise.resolve([3]), [4], [5]];

		const r0 = F.fmap<typeof a, number>(async e => F.fmap(async e1 => e1, e))(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.fmap(async e => F.fmap(async e1 => F.fmap(async e2 => e2, e1), e), a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.fmap<typeof a, string>(e => F.fmap(e1 => e1, e))(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.fmap(e => F.fmap(e1 => e1, e), a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [[1], [Promise.resolve('a')], [2], [Promise.resolve(3)], Promise.resolve([4]), Promise.resolve(['b'])];

        const r0 = F.fmap<typeof a, number[] | string[] | Promise<string>[] | Promise<number>[]>(e => e)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.fmap(e => e, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('flat', () => {
	it('from Normal Value', async () => {
		const a = [1, [2, 3, [4, 5]], 6];

		const r0 = F.flat(a); // $ExpectType AsyncIterableIterator<number | number[]>
		const r1 = F.flat(r0); // $ExpectType AsyncIterableIterator<number>
        const r2 = F.flat(r1); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r2).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = ['he', 'l', [['l']], [[Promise.resolve('o')]]];

		const r0 = F.flat(a); // $ExpectType AsyncIterableIterator<string | string[] | Promise<string>[]>
		const r1 = F.flat(r0); // $ExpectType AsyncIterableIterator<string>
        const r2 = F.flat(r1); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r2).then(ifNilThrow(new Error()));
	});

	it('from String', async () => {
		const a = 'helloworld';

		const r0 = F.flat(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.flat(r0); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [[1], 2, ['a'], 'b', Promise.resolve([3]), Promise.resolve('c'), Promise.resolve(['d']), [Promise.resolve('e')], [Promise.resolve(4)]];

        const r0 = F.flat(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.flat(r0); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('dflat', () => {
    it('from Normal Value', async () => {
        const a = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10, [11, [12]]]]]]]]]]]];

        const r0 = F.dflat(a); // $ExpectType AsyncIterableIterator<number>
    });

    it('from Promise Value', async () => {
        const a = [1, [2, [Promise.resolve(3), [4, [5, [6, [Promise.resolve(7), [8, [9, [Promise.resolve(10), [11, [12]]]]]]]]]]]];

        const r0 = F.dflat(a); // $ExpectType AsyncIterableIterator<number>
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, [2, [Promise.resolve([null, [null, Promise.resolve([null])]]), [4, [null, [6, [Promise.resolve([7]), [8, [9, [Promise.resolve(10)]]]]]]]]]];

        const r0 = F.dflat(a); // $ExpectType AsyncIterableIterator<number | null>
    });
});

describe('take', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4];

        const r0 = F.take<number>(5)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.take(5, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve(1), 2, 3, 4];

        const r0 = F.take<number>(5)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.take(5, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.take<string>(5)(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.take(5, a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), Promise.resolve('a'), 'b'];

        const r0 = F.take<string | number>(5)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.take(5, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('takeWhile', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.takeWhile<number>(e => e > 3)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.takeWhile((e) => e > 3, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, Promise.resolve(2), 3, 4, 5];

		const r0 = F.takeWhile<number>(e => e > 3)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.takeWhile((e) => e > 3, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.takeWhile<string>(e => e === 'o')(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.takeWhile(e => e === 'o', a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), Promise.resolve('a'), 'b'];

        const r0 = F.takeWhile<string | number>(e => e === 'a')(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.takeWhile(e => e === 'a', a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('foldl', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldl<number>((acc, e) => acc + e)(0)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldl<number>((acc, e) => acc + e)(0, a).then(ifNilThrow(new Error())); // $ExpectType number
		const r2 = await F.foldl((acc, e) => acc + e, 0)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r3 = await F.foldl((acc, e) => acc + e, 0, a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.foldl<number>(async (acc, e) => acc + e)(Promise.resolve(0))(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldl<number>(async (acc, e) => acc + e)(Promise.resolve(0), a).then(ifNilThrow(new Error())); // $ExpectType number
		const r2 = await F.foldl<number>(async (acc, e) => acc + e, Promise.resolve(0))(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r3 = await F.foldl(async (acc, e) => acc + e, Promise.resolve(0), a).then(ifNilThrow(new Error())); // $ExpectType number

		// const rrrr = await F.foldl<number>((acc, e) => acc + e)(Promise.resolve(0))(a);
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.foldl<string>((acc, e) => acc + e)('')(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r1 = await F.foldl<string>((acc, e) => acc + e)('', a).then(ifNilThrow(new Error())); // $ExpectType string
        const r2 = await F.foldl<string>((acc, e) => acc + e, '')(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r3 = await F.foldl((acc, e) => acc + e, '', a).then(ifNilThrow(new Error())); // $ExpectType string
    });

    it('from Normal / Promise Union', async () => {
        const a = [Promise.resolve(1), 2, 'a', Promise.resolve('b')];

        const r0 = await F.foldl<string | number>((acc, e) => acc === 'a' ? acc : e)(0)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.foldl<string | number>((acc, e) => acc === 'a' ? acc : e)(0, a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r2 = await F.foldl<string | number>((acc, e) => acc === 'a' ? acc : e, 0)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r3 = await F.foldl((acc, e) => acc === 'a' ? acc : e, 0, a).then(ifNilThrow(new Error())); // $ExpectType string | number
    });
});

describe('foldl1', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldl1<number>((acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldl1((acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.foldl1<number>(async (acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldl1(async (acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType number
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.foldl1<string>((acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r1 = await F.foldl1((acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType string
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = await F.foldl1<string | number>((acc, e) => acc === 'a' ? acc : e)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.foldl1((acc, e) => acc === 'a' ? acc : e, a).then(ifNilThrow(new Error())); // $ExpectType string | number
    });
});

describe('reduce', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.reduce<number>((acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.reduce((acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.reduce<number>(async (acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.reduce(async (acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType number
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.reduce<string>((acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r1 = await F.reduce((acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType string
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = await F.reduce<string | number>((acc, e) => acc === 'a' ? acc : e)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.reduce((acc, e) => acc === 'a' ? acc : e, a).then(ifNilThrow(new Error())); // $ExpectType string | number
    });
});

describe('scanl', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.scanl<number>((b, c) => b + c)(0)(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.scanl<number>((b, c) => b + c)(0, a); // $ExpectType AsyncIterableIterator<number>
		const r2 = F.scanl<number>((b, c) => b + c, 0)(a); // $ExpectType AsyncIterableIterator<number>
        const r3 = F.scanl((b, c) => b + c, 0, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = F.scanl<number>(async (b, c) => b + c)(Promise.resolve(0))(a); // $ExpectType AsyncIterableIterator<number>
		const r1 = F.scanl<number>(async (b, c) => b + c)(Promise.resolve(0), a); // $ExpectType AsyncIterableIterator<number>
		const r2 = F.scanl<number>(async (b, c) => b + c, Promise.resolve(0))(a); // $ExpectType AsyncIterableIterator<number>
        const r3 = F.scanl(async (b, c) => b + c, Promise.resolve(0), a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.scanl<string>((b, c) => b + c)('')(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.scanl<string>((b, c) => b + c)('', a); // $ExpectType AsyncIterableIterator<string>
        const r2 = F.scanl<string>((b, c) => b + c, '')(a); // $ExpectType AsyncIterableIterator<string>
        const r3 = F.scanl((b, c) => b + c, '', a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = F.scanl<string | number>((b, c) => b === 'a' ? b : c)('')(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.scanl<string | number>((b, c) => b === 'a' ? b : c)('', a); // $ExpectType AsyncIterableIterator<string | number>
        const r2 = F.scanl<string | number>((b, c) => b === 'a' ? b : c, '')(a); // $ExpectType AsyncIterableIterator<string | number>
        const r3 = F.scanl((b, c) => b === 'a' ? b : c, '', a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
    });
});

describe('scanl1', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.scanl1<number>((b, c) => b + c)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.scanl1((b, c) => b + c, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = F.scanl1<number>(async (b, c) => b + c)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.scanl1(async (b, c) => b + c, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.scanl1<string>((b, c) => b + c)(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.scanl1((b, c) => b + c, a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = F.scanl1<string | number>((b, c) => b === 'a' ? b : c)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.scanl1((b, c) => b === 'a' ? b : c, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('reverse', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

        const r0 = F.reverse(a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

        const r0 = F.reverse(a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.reverse(a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = F.reverse(a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });
});

describe('foldr', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldr<number>((acc, e) => acc + e)(0)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldr<number>((acc, e) => acc + e)(0, a).then(ifNilThrow(new Error())); // $ExpectType number
		const r2 = await F.foldr<number>((acc, e) => acc + e, 0)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r3 = await F.foldr((acc, e) => acc + e, 0, a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.foldr<number>(async (acc, e) => acc + e)(Promise.resolve(0))(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldr<number>(async (acc, e) => acc + e)(Promise.resolve(0), a).then(ifNilThrow(new Error())); // $ExpectType number
		const r2 = await F.foldr<number>(async (acc, e) => acc + e, Promise.resolve(0))(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r3 = await F.foldr(async (acc, e) => acc + e, Promise.resolve(0), a).then(ifNilThrow(new Error())); // $ExpectType number
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.foldr<string>((acc, e) => acc + e)('')(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r1 = await F.foldr<string>((acc, e) => acc + e)('', a).then(ifNilThrow(new Error())); // $ExpectType string
        const r2 = await F.foldr<string>((acc, e) => acc + e, '')(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r3 = await F.foldr((acc, e) => acc + e, '', a).then(ifNilThrow(new Error())); // $ExpectType string
    });

    it('from Normal / Promise Union', async () => {
        const a = [Promise.resolve(1), 2, 'a', Promise.resolve('b')];

        const r0 = await F.foldr<string | number>((acc, e) => acc === 'a' ? acc : e)(0)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.foldr<string | number>((acc, e) => acc === 'a' ? acc : e)(0, a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r2 = await F.foldr<string | number>((acc, e) => acc === 'a' ? acc : e, 0)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r3 = await F.foldr((acc, e) => acc === 'a' ? acc : e, 0, a).then(ifNilThrow(new Error())); // $ExpectType string | number
    });
});

describe('foldr1', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.foldr1<number>((acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldr1((acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.foldr1<number>(async (acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType number
		const r1 = await F.foldr1(async (acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType number
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.foldr1<string>((acc, e) => acc + e)(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r1 = await F.foldr1((acc, e) => acc + e, a).then(ifNilThrow(new Error())); // $ExpectType string
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = await F.foldr1<string | number>((acc, e) => acc === 'a' ? acc : e)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.foldr1((acc, e) => acc === 'a' ? acc : e, a).then(ifNilThrow(new Error())); // $ExpectType string | number
    });
});

describe('zip', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];
		const b = ['a', 'b', 'c', 'd', 'e'];

		const r0 = F.zip<number, string>(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
        const r1 = F.zip(a, b); // $ExpectType AsyncIterableIterator<[number, string]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];
		const b = ['a', Promise.resolve('b'), 'c', 'd', 'e'];

		const r0 = F.zip<number, string>(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
        const r1 = F.zip(a, b); // $ExpectType AsyncIterableIterator<[number, string]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';
        const b = 'dlrow olleh';

        const r0 = F.zip<string, string>(a)(b); // $ExpectType AsyncIterableIterator<[string, string]>
        const r1 = F.zip(a, b); // $ExpectType AsyncIterableIterator<[string, string]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];
        const b = [Promise.resolve('b'), 'a', Promise.resolve(2), 1];

        const r0 = F.zip<string | number, string | number>(a)(b); // $ExpectType AsyncIterableIterator<[string | number, string | number]>
        const r1 = F.zip(a, b); // $ExpectType AsyncIterableIterator<[string | number, string | number]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('zipWith', () => {
	it('from Normal Value', async () => {
		const a = [{ id: 0 }, { id: 1 }, { id: 2 }];
		const b = [{ name: 'hong9802' }, { name: 'cenox' }, { name: 'gyungdal' }];

		const r0 = F.zipWith<{ id: number; }, { name: string; }, number, string>((a, b) => [a.id, b.name])(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r1 = F.zipWith<{ id: number; }, { name: string; }, number, string>((a, b) => [a.id, b.name])(a, b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r2 = F.zipWith<{ id: number; }, { name: string; }, number, string>((a, b) => [a.id, b.name], a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
        const r3 = F.zipWith((a, b) => [a.id, b.name], a, b); // $ExpectType AsyncIterableIterator<[number, string]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve({ id: 0 }), { id: 1 }, { id: 2 }];
		const b = [{ name: 'hong9802' }, { name: 'cenox' }, Promise.resolve({ name: 'gyungdal' })];

		const r0 = F.zipWith<{ id: number; }, { name: string; }, number, string>(async (a, b) => [a.id, b.name])(a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r1 = F.zipWith<{ id: number; }, { name: string; }, number, string>(async (a, b) => [a.id, b.name])(a, b); // $ExpectType AsyncIterableIterator<[number, string]>
		const r2 = F.zipWith<{ id: number; }, { name: string; }, number, string>(async (a, b) => [a.id, b.name], a)(b); // $ExpectType AsyncIterableIterator<[number, string]>
        const r3 = F.zipWith((a, b) => [a.id, b.name], a, b); // $ExpectType AsyncIterableIterator<[number, string]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';
        const b = 'dlrow olleh';

        const r0 = F.zipWith<string, string, string, string>((a, b) => [a, b])(a)(b); // $ExpectType AsyncIterableIterator<[string, string]>
        const r1 = F.zipWith<string, string, string, string>((a, b) => [a, b])(a, b); // $ExpectType AsyncIterableIterator<[string, string]>
        const r2 = F.zipWith<string, string, string, string>((a, b) => [a, b], a)(b); // $ExpectType AsyncIterableIterator<[string, string]>
        const r3 = F.zipWith((a, b) => [a, b], a, b); // $ExpectType AsyncIterableIterator<[string, string]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];
        const b = [Promise.resolve('b'), 'a', Promise.resolve(2), 1];

        const r0 = F.zipWith<string | number, string | number, string | number, string | number>((a, b) => [a, b])(a)(b); // $ExpectType AsyncIterableIterator<[string | number, string | number]>
        const r1 = F.zipWith<string | number, string | number, string | number, string | number>((a, b) => [a, b])(a, b); // $ExpectType AsyncIterableIterator<[string | number, string | number]>
        const r2 = F.zipWith<string | number, string | number, string | number, string | number>((a, b) => [a, b], a)(b); // $ExpectType AsyncIterableIterator<[string | number, string | number]>
        const r3 = F.zipWith((a, b) => [a, b], a, b); // $ExpectType AsyncIterableIterator<[string | number, string | number]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
        await F.collect(r2).then(ifNilThrow(new Error()));
        await F.collect(r3).then(ifNilThrow(new Error()));
    });
});

///
/// stream.js
///
describe('rangeOf', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, [4, 5, [6]]];

        const r0 = F.rangeOf(...a); // $ExpectType AsyncIterableIterator<number | number[]>

        await F.collect(r0).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), [4, Promise.resolve(5), [Promise.resolve(6)], [7]]];

        const r0 = F.rangeOf(...a); // $ExpectType AsyncIterableIterator<number | number[] | Promise<number>[]>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.rangeOf(...a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b'), [Promise.resolve(3)], [Promise.resolve('c')]];

        const r0 = F.rangeOf(...a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });
});

describe('firstOrGet', () => {
    it('from Normal Value And Supply Normal Value', async () => {
        const t = [1, 2, 3, 4, 5];
        const y = 'y' as string;

        const r0 = await F.firstOrGet<number, string>(y)(t).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.firstOrGet(y, t).then(ifNilThrow(new Error())); // $ExpectType string | number
    });

    it('from Normal Value And Supply Normal Function', async () => {
        const t = [1, 2, 3, 4, 5];
        const y1 = () => () => 'y';
        const y2 = () => async () => 'y';

        const r0 = await F.firstOrGet<number, string>(y1())(t).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.firstOrGet(y2(), t).then(ifNilThrow(new Error())); // $ExpectType string | number
    });

    it('from Promise Value And Supply Promise Value', async () => {
        const t = [Promise.resolve(1), 2, 3, 4, 5];
        const y = Promise.resolve('y');

        const r0 = await F.firstOrGet<number, string>(y)(t).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.firstOrGet(y, t).then(ifNilThrow(new Error())); // $ExpectType string | number
    });

    it('from Promise Value And Supply Promise Wrapped Function', async () => {
        const t = [Promise.resolve(1), 2, 3, 4, 5];
        const y1 = () => () => 'y';
        const y2 = () => async () => 'y';

        const r0 = await F.firstOrGet<number, string>(Promise.resolve(y1()))(t).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.firstOrGet(Promise.resolve(y2()), t).then(ifNilThrow(new Error())); // $ExpectType string | number
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];
        const y = F.first([9, Promise.resolve('y'), 'y', Promise.resolve(9)]);

        const r0 = await F.firstOrGet<string | number, string | number>(y)(a).then(ifNilThrow(new Error())); // $ExpectType string | number
        const r1 = await F.firstOrGet(y, a).then(ifNilThrow(new Error())); // $ExpectType string | number
    });
});

describe('emptyThen', () => {
	it('from Normal Value', async () => {
		const testSupplyFunc = (i: string[]) => () => i;

		const t = [] as number[];
		const y = ['he', 'll', 'o'];

		const ar0 = F.emptyThen<number, string>(y)(t); // $ExpectType AsyncIterableIterator<string | number>
		const ar1 = F.emptyThen<number, string>(testSupplyFunc(y))(t); // $ExpectType AsyncIterableIterator<string | number>

        const br0 = F.emptyThen(y, t); // $ExpectType AsyncIterableIterator<string | number>
        const br1 = F.emptyThen(testSupplyFunc(y), t); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });

	it('from Promise Value', async () => {
		const testSupplyFunc = (i: (string | Promise<string>)[]) => async () => i;

		const t = [] as number[];
		const y = [Promise.resolve('he'), 'll', 'o'];

		const ar0 = F.emptyThen<number, string>(y)(t); // $ExpectType AsyncIterableIterator<string | number>
		const ar1 = F.emptyThen<number, string>(testSupplyFunc(y))(t); // $ExpectType AsyncIterableIterator<string | number>

        const br0 = F.emptyThen(Promise.resolve(y), t); // $ExpectType AsyncIterableIterator<string | number>
        const br1 = F.emptyThen(testSupplyFunc(y), t); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });

    it('from Promsie Wrapped Supply', async () => {
        const testSupplyFunc = (i: string[]) => () => i;

		const t = [] as number[];
		const y = ['he', 'll', 'o'];

		const ar0 = F.emptyThen<number, string>(Promise.resolve(y))(t); // $ExpectType AsyncIterableIterator<string | number>
		const ar1 = F.emptyThen<number, string>(Promise.resolve(testSupplyFunc(y)))(t); // $ExpectType AsyncIterableIterator<string | number>

        const br0 = F.emptyThen(Promise.resolve(y), t); // $ExpectType AsyncIterableIterator<string | number>
        const br1 = F.emptyThen(Promise.resolve(testSupplyFunc(y)), t); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const testSupplyFunc = (i: string) => () => i;

        const t = [] as number[];
        const y = 'hello world';

        const ar0 = F.emptyThen<number, string>(y)(t); // $ExpectType AsyncIterableIterator<string | number>
        const ar1 = F.emptyThen<number, string>(testSupplyFunc(y))(t); // $ExpectType AsyncIterableIterator<string | number>

        const br0 = F.emptyThen(Promise.resolve(y), t); // $ExpectType AsyncIterableIterator<string | number>
        const br1 = F.emptyThen(testSupplyFunc(y), t); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const testSupplyFunc = (i: (string | number | Promise<string> | Promise<number>)[]) => () => i;

        const t = [] as (string | Promise<string> | number | Promise<number>)[];
        const y = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const ar0 = F.emptyThen<string | number, string | number>(y)(t); // $ExpectType AsyncIterableIterator<string | number>
        const ar1 = F.emptyThen<string | number, string | number>(testSupplyFunc(y))(t); // $ExpectType AsyncIterableIterator<string | number>

        const br0 = F.emptyThen(Promise.resolve(y), t); // $ExpectType AsyncIterableIterator<string | number>
        const br1 = F.emptyThen(testSupplyFunc(y), t); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });
});

describe('collect', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.collect(a).then(ifNilThrow(new Error())); // $ExpectType number[]
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve(1), 2, 3, 4, 5];

		const r0 = await F.collect(a).then(ifNilThrow(new Error())); // $ExpectType number[]
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.collect(a).then(ifNilThrow(new Error())); // $ExpectType string[]
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = await F.collect(a).then(ifNilThrow(new Error())); // $ExpectType (string | number)[]
    });
});

describe('collectMap', () => {
	it('from Normal Value', async () => {
		const a = [['a', 0], ['b', 1], ['c', 2]];

		const r0 = await F.collectMap(a).then(ifNilThrow(new Error())); // $ExpectType Map<string | number, string | number>
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve(['a', 0]), ['b', 1], ['c', 2]];

		// const r0 = await F.collectMap(a as (Promise<[string, number]> | [string, number])[])
		const r0 = await F.collectMap(a).then(ifNilThrow(new Error())); // $ExpectType Map<string | number, string | number>
    });

    it('from Normal Value With Type Assertion', async () => {
		const a = [['a', 0], ['b', 1], ['c', 2]];

		const r0 = await F.collectMap(a as [string, number][]).then(ifNilThrow(new Error())); // $ExpectType Map<string, number>
    });

    it('from Normal / Promise Union', async () => {
		const a = [Promise.resolve(['a', 0]), ['b', 1], [2, 'c'], Promise.resolve([3, 'd'])];

        const r0 = await F.collectMap(a).then(ifNilThrow(new Error())); // $ExpectType Map<string | number, string | number>
    });
});

describe('collectSet', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.collectSet(a).then(ifNilThrow(new Error())); // $ExpectType Set<number>
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.collectSet(a).then(ifNilThrow(new Error())); // $ExpectType Set<number>
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.collectSet(a).then(ifNilThrow(new Error())); // $ExpectType Set<string>
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = await F.collectSet(a).then(ifNilThrow(new Error())); // $ExpectType Set<string | number>
    });
});

describe('forEach', () => {
    it('from Normal Value', async () => {
        const a = [0, 1, 2, 3, 4, 5];
        const b = ['a', 'b', 'c', 'd', 'e', 'f'];

        const r0 = await F.forEach<number, string>(e => b[e])(a).then(ifNilThrow(new Error())); // $ExpectType string[]
        const r1 = await F.forEach(e => b[e], a).then(ifNilThrow(new Error())); // $ExpectType string[]
    });

    it('from Promise Value', async () => {
        const a = [0, 1, Promise.resolve(2), 3, Promise.resolve(4), 5];
        const b = ['a', 'b', 'c', 'd', 'e', 'f'];

        const r0 = await F.forEach<number, string>(e => b[e])(a).then(ifNilThrow(new Error())); // $ExpectType string[]
        const r1 = await F.forEach(e => b[e], a).then(ifNilThrow(new Error())); // $ExpectType string[]
    });

    it('from String', async () => {
        const a = 'fcbaadefbab';
        const b: { [k: string]: number; } = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };

        const r0 = await F.forEach<string, number>(e => b[e])(a).then(ifNilThrow(new Error())); // $ExpectType number[]
        const r1 = await F.forEach(e => b[e], a).then(ifNilThrow(new Error())); // $ExpectType number[]
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), Promise.resolve('a'), 'b'];
        const b: { [k: string]: string | number; } = { a: 0, b: 0, 1: 'b', 2: 'c' };

        const r0 = await F.forEach<string | number, string | number>(e => b[e])(a).then(ifNilThrow(new Error())); // $ExpectType (string | number)[]
        const r1 = await F.forEach(e => b[e], a).then(ifNilThrow(new Error())); // $ExpectType (string | number)[]
    });
});

describe('distinctBy', () => {
	it('from Normal Value', async () => {
		const a = [{ id: 1 }, { id: 1 }, { id: 2 }];

		const r0 = F.distinctBy<{ id: number }>(e => e.id)(a); // $ExpectType AsyncIterableIterator<{ id: number; }>
        const r1 = F.distinctBy(e => e.id, a); // $ExpectType AsyncIterableIterator<{ id: number; }>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve({ id: 1 }), Promise.resolve({ id: 1 }), { id: 2 }];

		const r0 = F.distinctBy<{ id: number; }>(async e => e.id)(a); // $ExpectType AsyncIterableIterator<{ id: number; }>
        const r1 = F.distinctBy(async e => e.id, a); // $ExpectType AsyncIterableIterator<{ id: number; }>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.distinctBy<string>(e => e)(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.distinctBy(e => e, a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [Promise.resolve('a'), 1, Promise.resolve(1), 'a'];

        const r0 = F.distinctBy<string | number>(e => e)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.distinctBy(e => e, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('distinct', () => {
	it('from Normal Value', async () => {
		const a = [1, 1, 1, 2, 3];

        const r0 = F.distinct(a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve(1), Promise.resolve(1), 1, Promise.resolve(2), 3];

        const r0 = F.distinct(a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.distinct(a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(1), 'a', Promise.resolve('a')];

        const r0 = F.distinct(a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });
});

describe('some', () => {
    it('from Normal Value', async () => {
        const a = [0, 1, 2, 3, 4];

        const r0 = await F.some<number>(e => e < 4)(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.some(e => e > 4, a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });

    it('from Promise Value', async () => {
        const a = [0, Promise.resolve(1), 2, 3, Promise.resolve(4)];

        const r0 = await F.some<number>(e => e < 4)(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.some(e => e > 4, a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });

    it('from String', async () => {
        const a = 'aaaaaba';

        const r0 = await F.some<string>(e => e.includes('b'))(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.some(e => !e.includes('b'), a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });

    it('from Normal / Promise Union', async () => {
        const a = ['a', Promise.resolve('b'), Promise.resolve('c'), Promise.resolve(1), 2, 1];

        const r0 = await F.some<string | number>(e => e === 'a')(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.some(e => e === 'a', a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });
});

describe('every', () => {
    it('from Normal Value', async () => {
        const a = [0, 1, 2, 3, 4];

        const r0 = await F.every<number>(e => e < 4)(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.every(e => e > 4, a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });

    it('from Promise Value', async () => {
        const a = [0, Promise.resolve(1), 2, 3, Promise.resolve(4)];

        const r0 = await F.every<number>(e => e < 4)(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.every(e => e > 4, a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });

    it('from String', async () => {
        const a = 'aaaaaaa';

        const r0 = await F.every<string>(e => e.includes('b'))(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.every(e => e.includes('a'), a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });

    it('from Normal / Promise Union', async () => {
        const a = ['a', Promise.resolve('b'), Promise.resolve('c'), Promise.resolve(1), 2, 1];

        const r0 = await F.some<string | number>(e => e === 'a')(a).then(ifNilThrow(new Error())); // $ExpectType boolean
        const r1 = await F.some(e => e === 'a', a).then(ifNilThrow(new Error())); // $ExpectType boolean
    });
});

describe('maxBy', () => {
	it('from Normal Value', async () => {
		const a = [{ id: 1 }, { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.maxBy<{ id: number; }>(e => e.id)(a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }
		const r1 = await F.maxBy(e => e.id, a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve({ id: 1 }), { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.maxBy<{ id: number; }>(e => e.id)(a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }
		const r1 = await F.maxBy(async e => e.id, a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.maxBy<string>(e => e)(a).then(ifNilThrow(new Error())); // $ExpectType string
        const r1 = await F.maxBy(e => e, a).then(ifNilThrow(new Error())); // $ExpectType string
    });

/*     it('from Normal / Promise Union', async () => {
        const a = [Promise.resolve(1), 2, 'a', Promise.resolve('b')];

        // 말도 안 된다. 다른 타입의 값과 비교할 수 있다니
        // 이건 지워야 되는 것 같은데

        const r0 = await F.maxBy<string | number>(e => e)(a).then(ifNilThrow(new Error())); // ExpectType string | number
        const r1 = await F.maxBy(e => e, a).then(ifNilThrow(new Error())); // ExpectType string | number
    }); */
});

describe('minBy', () => {
	it('from Normal Value', async () => {
		const a = [{ id: 1 }, { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.minBy<{ id: number; }>(e => e.id)(a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }
		const r1 = await F.minBy(e => e.id, a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve({ id: 1 }), { id: 5 }, { id: 2 }, { id: 4 }, { id: 3 }];

		const r0 = await F.minBy<{ id: number; }>(e => e.id)(a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }
		const r1 = await F.minBy(async e => e.id, a).then(ifNilThrow(new Error())); // $ExpectType { id: number; }

		r0.id; // $ExpectType number
		r1.id; // $ExpectType number
	});
});

describe('count', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5, 6, 7, 8];

		const r0 = await F.count(a).then(ifNilThrow(new Error())); // $ExpectType number
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.count(a).then(ifNilThrow(new Error())); // $ExpectType number
    });
});

describe('sum', () => {
	it('from Normal Number', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.sum(a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = [Promise.resolve(1), 2, 3, 4, 5];

		const r0 = await F.sum(a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from String', async () => {
		const a = 'helloworld';

		const r0 = await F.sum(a).then(ifNilThrow(new Error())); // $ExpectType string
	});
});

describe('max', () => {
	it('from Normal Number', async () => {
		const a = [1, 5, 2, 4, 3];

		const r0 = await F.max(a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = ['he', Promise.resolve('ll'), 'o'];

		const r0 = await F.max(a).then(ifNilThrow(new Error())); // $ExpectType string
	});

	it('from String', async () => {
		const a = 'helloworld';

		const r0 = await F.max(a).then(ifNilThrow(new Error())); // $ExpectType string
	});
});

describe('min', () => {
	it('from Normal Number', async () => {
		const a = [1, 5, 2, 4, 3];

		const r0 = await F.min(a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = [1, Promise.resolve(5), 4, 3, 2];

		const r0 = await F.min(a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from String', async () => {
		const a = 'helloworld';

		const r0 = await F.min(a).then(ifNilThrow(new Error())); // $ExpectType string
	});
});

describe('average', () => {
	it('from Normal Number', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = await F.average(a).then(ifNilThrow(new Error())); // $ExpectType number
	});

	it('from Promise Number', async () => {
		const a = [Promise.resolve(1), 2, 3, 4, 5];

		const r0 = await F.average(a).then(ifNilThrow(new Error())); // $ExpectType number
	});
});

describe('splitBy', () => {
	it('from Number', async () => {
		// const a = [1,2,3,4,5];
		const a = 1;

		const r0 = F.splitBy<number, number>(e => [e, 0])(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.splitBy(e => [0, e], a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from String', async () => {
		const a = 'hello world';

		const r0 = F.splitBy<string, string>(e => e.split(' '))(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.splitBy(e => e.split(' '), a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Number to Promise Function', async () => {
		const a = 1;

		const r0 = F.splitBy<number, number>(async e => [e, 0])(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.splitBy(async e => [0, e], a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String to Promise Function', async () => {
        const a = 'hello world';

		const r0 = F.splitBy<string, string>(async e => e.split(' '))(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.splitBy(async e => e.split(' '), a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('errorThen', () => {
	it('from Normal Value', async () => {
		const testSupplyFunc = (i: string[]) => () => i;

        const e = ['error'];
        const a = [1, 2, 3, 4, 5];

		const ar0 = F.errorThen<number, string>(e)(a); // $ExpectType AsyncIterableIterator<string | number>
        const ar1 = F.errorThen<number, string>(testSupplyFunc(e))(a); // $ExpectType AsyncIterableIterator<string | number>

        const br0 = F.errorThen(e, a); // $ExpectType AsyncIterableIterator<string | number>
        const br1 = F.errorThen(testSupplyFunc(e), a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const testSupplyFunc = (i: AsyncIterableIterator<string>) => async () => i;

        const e = ['error'];
        const a = [1, 2, Promise.resolve(3), 4, 5];

		const ar0 = F.errorThen<number, string>(F.seq(e))(a); // $ExpectType AsyncIterableIterator<string | number>
        const ar1 = F.errorThen<number, string>(testSupplyFunc(F.seq(e)))(a); // $ExpectType AsyncIterableIterator<string | number>

        const br0 = F.errorThen(F.seq(e), a); // $ExpectType AsyncIterableIterator<string | number>
        const br1 = F.errorThen(testSupplyFunc(F.seq(e)), a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });

    it('from Promise Wrapped Supply', async () => {
        const testSupplyFunc = (i: string[]) => () => i;

        const e = ['error'];
        const a = [1, 2, 3, 4, 5];

        const ar0 = F.errorThen<number, string>(Promise.resolve(e))(a);
        const ar1 = F.errorThen<number, string>(Promise.resolve(testSupplyFunc(e)))(a);

        const br0 = F.errorThen(Promise.resolve(e), a);
        const br1 = F.errorThen(Promise.resolve(testSupplyFunc(e)), a);

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });

    it('to String', async () => {
        const a = [1, 2, 3, 4, 5];

        const r0 = F.errorThen<number, string>('error')(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.errorThen('error', a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
		const testSupplyFunc = (i: (null | Promise<null> | { id: number; } | Promise<{ id: number; }>)[]) => () => i;

        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];
        const e = [Promise.resolve(null), null, Promise.resolve({ id: 1}), { id: 2}];

        const ar0 = F.errorThen<string | number, { id: number; } | null>(e)(a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | null>
        const ar1 = F.errorThen<string | number, { id: number; } | null>(Promise.resolve(e))(a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | null>
        const ar2 = F.errorThen<string | number, { id: number; } | null>(testSupplyFunc(e))(a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | null>
        const ar3 = F.errorThen<string | number, { id: number; } | null>(Promise.resolve(testSupplyFunc(e)))(a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | null>

        const br0 = F.errorThen(e, a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | { id: number; } | null>
        const br1 = F.errorThen(Promise.resolve(e), a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | { id: number; } | null>
        const br2 = F.errorThen(testSupplyFunc(e), a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | { id: number; } | null>
        const br3 = F.errorThen(Promise.resolve(testSupplyFunc(e)), a); // $ExpectType AsyncIterableIterator<string | number | { id: number; } | { id: number; } | null>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));
        await F.collect(ar2).then(ifNilThrow(new Error()));
        await F.collect(ar3).then(ifNilThrow(new Error()));

        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
        await F.collect(br2).then(ifNilThrow(new Error()));
        await F.collect(br3).then(ifNilThrow(new Error()));
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

		const a = [1, 2, Promise.resolve(3), 4, 5];

		const ar0 = F.then(generatorFunction)(F.seq(a)); // $ExpectType AsyncIterableIterator<number>
		const ar1 = F.then(generatorFunction, F.seq(a)); // $ExpectType AsyncIterableIterator<number>

		const br0 = await F.then<AsyncIterableIterator<number>, Promise<AsyncIterableIterator<number>>>(async iter => iter)(F.seq(a)).then(ifNilThrow(new Error())); // $ExpectType AsyncIterableIterator<number>
		const br1 = await F.then(async iter => iter, F.seq(a)).then(ifNilThrow(new Error())); // $ExpectType AsyncIterableIterator<number>
	});

	it('from Promise Value With Return Promise Void', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = await F.then<(number | Promise<number>)[], Promise<void>>(async () => F.fnothing())(a); // $ExpectType void
		const r1 = await F.then(async () => F.fnothing(), a); // $ExpectType void
	});
});

describe('buffer', () => {
	it('from Normal Value', async () => {
		const a = [1, 2, 3, 4, 5];

		const r0 = F.buffer<number>(1)(a); // $ExpectType AsyncIterableIterator<[number]>
        const r1 = F.buffer(2, a); // $ExpectType AsyncIterableIterator<[number]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [1, 2, Promise.resolve(3), 4, 5];

		const r0 = F.buffer<number>(1)(a); // $ExpectType AsyncIterableIterator<[number]>
        const r1 = F.buffer(2, a); // $ExpectType AsyncIterableIterator<[number]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.buffer<string>(1)(a); // $ExpectType AsyncIterableIterator<[string]>
        const r1 = F.buffer(2, a); // $ExpectType AsyncIterableIterator<[string]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promsie Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = F.buffer<string | number>(1)(a); // $ExpectType AsyncIterableIterator<[string | number]>
        const r1 = F.buffer(2, a); // $ExpectType AsyncIterableIterator<[string | number]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

///
/// tsql.js
///
describe('groupBy', () => {
	it('from Object Array', async () => {
		const a = [{ type: 'human', name: 'syrflover' }, { type: 'kinggod', name: 'gyungdal' }, { type: 'human', name: 'cenox' }];

		const r0 = await F.groupBy<string, { type: string; name: string; }>(e => e.type)(a).then(ifNilThrow(new Error())); // $ExpectType Map<string, { type: string; name: string; }[]>
		const r1 = await F.groupBy(e => e.type, a).then(ifNilThrow(new Error())); // $ExpectType Map<string, { type: string; name: string; }[]>
	});

	it('from Array', async () => {
		const a = ['h', 1, 'e', 2, 'l', 3, 'l', 4, 'o', 5];

		const r0 = await F.groupBy<'string' | 'number', string | number>(e => typeof e === 'string' ? 'string' : 'number')(a).then(ifNilThrow(new Error())); // $ExpectType Map<"string" | "number", (string | number)[]>
		const r1 = await F.groupBy(e => typeof e === 'string' ? 'string' : 'number', a).then(ifNilThrow(new Error())); // $ExpectType Map<"string" | "number", (string | number)[]>
	});

	it('from Promise Object Array', async () => {
		const a = [Promise.resolve({ type: 'human', name: 'syrflover' }), { type: 'kinggod', name: 'gyungdal' }, { type: 'human', name: 'cenox' }];

		const r0 = await F.groupBy<string, { type: string; name: string; }>(async e => e.type)(a).then(ifNilThrow(new Error())); // $ExpectType Map<string, { type: string; name: string; }[]>
		const r1 = await F.groupBy(async e => e.type, a).then(ifNilThrow(new Error())); // $ExpectType Map<string, { type: string; name: string; }[]>
		// Map<string, { type: string; name: string; }>
	});

	it('from Promise Array', async () => {
		const a = ['h', 1, Promise.resolve('e'), 2, 'l', Promise.resolve(3), 'l', 4, 'o', 5];
		// const b = [1,2,3,Promise.resolve(4),5];
		// const c = [Promise.resolve('h'), 'ello']

		const r0 = await F.groupBy<'string' | 'number', string | number>(e => typeof e === 'string' ? 'string' : 'number')(a).then(ifNilThrow(new Error())); // $ExpectType Map<"string" | "number", (string | number)[]>
		const r1 = await F.groupBy(async e => typeof e === 'string' ? 'string' : 'number', a).then(ifNilThrow(new Error())); // $ExpectType Map<"string" | "number", (string | number)[]>
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = await F.groupBy<string, string>(e => e)(a).then(ifNilThrow(new Error())); // $ExpectType Map<string, string[]>
        const r1 = await F.groupBy(e => e, a).then(ifNilThrow(new Error())); // $ExpectType Map<string, string[]>
    });

    it('from Normal / Promise Union', async () => {
        const a = [1, Promise.resolve(2), 'a', Promise.resolve('b')];

        const r0 = await F.groupBy<string, string | number>(e => typeof e)(a);
        const r1 = await F.groupBy(e => typeof e, a);
    });
});

describe('concat', () => {
	it('from Array', async () => {
		const a = [1, 2, 3];
		const b = [3, 2, 1];

		const r0 = F.concat<number, number>(a)(b); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Array And String', async () => {
		const a = [1, 2, 3];
		const b = 'helloworld';

		const r0 = F.concat<number, string>(a)(b); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve(1), 2, 3];
		const b = [3, Promise.resolve(2), 1];

		const r0 = F.concat<number, number>(a)(b); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
		const a = 'hello';
		const b = 'world';

		const r0 = F.concat<string, string>(a)(b); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = ['a', Promise.resolve(1), Promise.resolve('b'), 2];
        const b = [null, Promise.resolve(null), Symbol('syr'), Promise.resolve(Symbol('flover'))];

        const r0 = F.concat<string | number, symbol | null>(a)(b); // $ExpectType AsyncIterableIterator<string | number | symbol | null>
        const r1 = F.concat(a, b); // $ExpectType AsyncIterableIterator<string | number | symbol | null>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('union', () => {
	it('from Array', async () => {
		const a = [1, 2, 3];
		const b = [3, 2, 1];

		const r0 = F.union<number, number>(a)(b); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.union(a, b); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Array And String', async () => {
		const a = [1, 2, 3];
		const b = 'helloworld';

		const r0 = F.union<number, string>(a)(b); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.union(a, b); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const a = [Promise.resolve(1), 2, 3];
		const b = [3, Promise.resolve(2), 1];

		const r0 = F.union<number, number>(a)(b); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.union(a, b); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
		const a = 'hello';
		const b = 'world';

		const r0 = F.union<string, string>(a)(b); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.union(a, b); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = ['a', Promise.resolve(1), Promise.resolve('b'), 2];
        const b = [null, Promise.resolve(null), Symbol('syr'), Promise.resolve(Symbol('flover'))];

        const r0 = F.union<string | number, symbol | null>(a)(b); // $ExpectType AsyncIterableIterator<string | number | symbol | null>
        const r1 = F.union(a, b); // $ExpectType AsyncIterableIterator<string | number | symbol | null>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
		rr3[0]; // $ExpectType Map<string, string | number>
    });

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.innerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.innerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.leftInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.leftInnerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.rightInnerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.rightInnerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.outerJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.outerJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));

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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));

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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }, { id: 3, name: 'SacredPigeon' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.leftOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.leftOuterJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));

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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number | undefined
		rr0[0].name; // $ExpectType string

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number | undefined
		rr1[0].name; // $ExpectType string

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number | undefined
		rr2[0].name; // $ExpectType string

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));

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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));
		rr0[0]; // $ExpectType Map<string, string | number>

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));
		rr1[0]; // $ExpectType Map<string, string | number>

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));
		rr2[0]; // $ExpectType Map<string, string | number>

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));
		rr3[0]; // $ExpectType Map<string, string | number>
	});

	it('from Object Array', async () => {
		const a = [{ id: 1, name: 'syrflover' }, { id: 2, name: 'GyungDal' }];
		const b = [{ id: 1, length: 8 }, { id: 3, length: 12 }];

		const r0 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a)(b);
		const r1 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id)(a, b);
		const r2 = F.rightOuterJoin<{ id: number; name: string; }, { id: number; length: number; }>((a, b) => a.id === b.id, a)(b);
		const r3 = F.rightOuterJoin((a, b) => a.id === b.id, a, b);

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string | undefined

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string | undefined

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string | undefined

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));

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

		const rr0 = await F.collect(r0).then(ifNilThrow(new Error()));

		rr0[0].id; // $ExpectType number
		rr0[0].length; // $ExpectType number
		rr0[0].name; // $ExpectType string | undefined

		const rr1 = await F.collect(r1).then(ifNilThrow(new Error()));

		rr1[0].id; // $ExpectType number
		rr1[0].length; // $ExpectType number
		rr1[0].name; // $ExpectType string | undefined

		const rr2 = await F.collect(r2).then(ifNilThrow(new Error()));

		rr2[0].id; // $ExpectType number
		rr2[0].length; // $ExpectType number
		rr2[0].name; // $ExpectType string | undefined

		const rr3 = await F.collect(r3).then(ifNilThrow(new Error()));

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
		await F.sleep(50); // $ExpectType void
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

    it('from Normal / Promise Union', async () => {
		const testDurationFunction = (t: number) => () => t;

        const a = [Promise.resolve(1), 2, 'a', Promise.resolve('b')];

        const r0 = F.withTimeout<string | number>(50)(a); // $ExpectType AsyncIterableIterator<string | number>
		const r1 = F.withTimeout<string | number>(testDurationFunction(50))(a); // $ExpectType AsyncIterableIterator<string | number>
		const r2 = F.withTimeout(50, a); // $ExpectType AsyncIterableIterator<string | number>
		const r3 = F.withTimeout(testDurationFunction(50), a); // $ExpectType AsyncIterableIterator<string | number>
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
			const ar0 = await F.timeout<string>(50)(testTimeoutFuncA(42)).then(F.ioe); // $ExpectType string
			const ar1 = await F.timeout<string>(testDurationFunction(50))(testTimeoutFuncA(43)).then(F.ioe); // $ExpectType string
			const ar2 = await F.timeout(50, testTimeoutFuncA(48)).then(F.ioe); // $ExpectType string
			const ar3 = await F.timeout(testDurationFunction(50), testTimeoutFuncA(46)).then(F.ioe); // $ExpectType string

			const br0 = await F.timeout<AsyncIterableIterator<number>>(38)(testTimeoutFuncB(27)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
			const br1 = await F.timeout<AsyncIterableIterator<number>>(testDurationFunction(49))(testTimeoutFuncB(84)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
			const br2 = await F.timeout(53, testTimeoutFuncB(23)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
			const br3 = await F.timeout(testDurationFunction(59), testTimeoutFuncB(51)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
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
			const ar0 = await F.timeout<string>(50)(testTimeoutFuncA(42)).then(F.ioe); // $ExpectType string
			const ar1 = await F.timeout<string>(testDurationFunction(50))(testTimeoutFuncA(43)).then(F.ioe); // $ExpectType string
			const ar2 = await F.timeout(50, testTimeoutFuncA(48)).then(F.ioe); // $ExpectType string
			const ar3 = await F.timeout(testDurationFunction(50), testTimeoutFuncA(46)).then(F.ioe); // $ExpectType string

			const br0 = await F.timeout<AsyncIterableIterator<number>>(38)(testTimeoutFuncB(27)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
			const br1 = await F.timeout<AsyncIterableIterator<number>>(testDurationFunction(49))(testTimeoutFuncB(84)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
			const br2 = await F.timeout(53, testTimeoutFuncB(23)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
			const br3 = await F.timeout(testDurationFunction(59), testTimeoutFuncB(51)).then(F.ioe); // $ExpectType AsyncIterableIterator<number>
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

		const r0 = F.interval(50, async () => { // $ExpectType { run: boolean; }
			await F.run(F.range(5), F.then(async _ => {
				/// work
				intervalCount++;
				if (intervalCount >= 5) {
					r0.run = false;
				}
			}));
		});
	});
});

describe('rangeInterval', () => {
	it('', () => {
		F.rangeInterval(50, 5); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(Promise.resolve(50), 5); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(() => 50, 5); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(async () => 50, 5); // $ExpectType AsyncIterableIterator<number>

		F.rangeInterval(50, 0, 5); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(Promise.resolve(50), 0, 5); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(() => 50, 0, 5); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(async () => 50, 0, 5); // $ExpectType AsyncIterableIterator<number>

		F.rangeInterval(50, 0, 5, 1); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(Promise.resolve(50), 0, 5, 1); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(() => 50, 0, 5, 1); // $ExpectType AsyncIterableIterator<number>
		F.rangeInterval(async () => 50, 0, 5, 1); // $ExpectType AsyncIterableIterator<number>
	});
});

//
// generator.js
//
describe('repeat', () => {
	it('from Normal Value', async () => {
		const ar0 = F.repeat('hello'); // $ExpectType AsyncIterableIterator<string>
        const ar1 = F.repeat(() => 'hello'); // $ExpectType AsyncIterableIterator<string>

        const br0 = F.repeat(20, 'hello'); // $ExpectType AsyncIterableIterator<string>
        const br1 = F.repeat(20, () => 'hello'); // $ExpectType AsyncIterableIterator<string>

        await F.run(ar0, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(ar1, F.take(5), F.collect).then(ifNilThrow(new Error()));

        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		const ar0 = F.repeat(Promise.resolve('world')); // $ExpectType AsyncIterableIterator<string>
        const ar1 = F.repeat(async () => 'world'); // $ExpectType AsyncIterableIterator<string>

        const br0 = F.repeat(20, Promise.resolve('world')); // $ExpectType AsyncIterableIterator<string>
        const br1 = F.repeat(20, async () => 'world'); // $ExpectType AsyncIterableIterator<string>

        await F.run(ar0, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(ar1, F.take(5), F.collect).then(ifNilThrow(new Error()));

        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });

    it('from Promise Wrapped Function Supply', async () => {
        const ar0 = F.repeat(Promise.resolve(() => 'hello world')); // $ExpectType AsyncIterableIterator<string>
        const br0 = F.repeat(20, Promise.resolve(() => 'hello world')); // $ExpectType AsyncIterableIterator<string>

        await F.run(ar0, F.take(5), F.collect).then(ifNilThrow(new Error()));

        await F.collect(br0).then(ifNilThrow(new Error()));
    });
});

describe('range', () => {
	it('', async () => {
		const r0 = F.range(5); // $ExpectType IterableIterator<number>
		const r1 = F.range(0, 5); // $ExpectType IterableIterator<number>
        const r2 = F.range(0, 5, 1); // $ExpectType IterableIterator<number>

        await F.run(r0, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(r1, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(r2, F.take(5), F.collect).then(ifNilThrow(new Error()));
	});
});

describe('iterate', () => {
	it('from Normal Value', async () => {
		// const r0 = F.iterate<number>(e => e + 1)(0);
		const r0 = F.iterate(F.inc, 0); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.iterate(F.inc, 0); // $ExpectType AsyncIterableIterator<number>

        await F.run(r0, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(r1, F.take(5), F.collect).then(ifNilThrow(new Error()));
	});

	it('from Promise Value', async () => {
		// const r0 = F.iterate(F.inc)(Promise.resolve(0));
		const r0 = F.iterate<number>(F.inc)(Promise.resolve(0)); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.iterate(F.inc, Promise.resolve(0)); // $ExpectType AsyncIterableIterator<number>

        await F.run(r0, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(r1, F.take(5), F.collect).then(ifNilThrow(new Error()));
	});

	it('from Normal Array', async () => {
		const fibo = (a: number[]) => [a[1], a[0] + a[1]];

		const r0 = F.iterate<number[]>(fibo)([0, 1]); // $ExpectType AsyncIterableIterator<number[]>
        const r1 = F.iterate(fibo, [0, 1]); // $ExpectType AsyncIterableIterator<number[]>

        await F.run(r0, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(r1, F.take(5), F.collect).then(ifNilThrow(new Error()));
	});

	it('from Promise Array', async () => {
		const fibo = (a: number[]) => [a[0], a[0] + a[1]];

		const r0 = F.iterate<number[]>(fibo)(Promise.resolve([0, 1])); // $ExpectType AsyncIterableIterator<number[]>
        const r1 = F.iterate(fibo, Promise.resolve([0, 1])); // $ExpectType AsyncIterableIterator<number[]>

        await F.run(r0, F.take(5), F.collect).then(ifNilThrow(new Error()));
        await F.run(r1, F.take(5), F.collect).then(ifNilThrow(new Error()));
    });
});

//
// parellel.js
//
describe('parallel_set_fetch_count', () => {
    it('', () => {
        F.parallel_set_fetch_count(200);
    });
});

describe('pmap', () => {
    it('from Normal Value', async () => {
        F.parallel_set_fetch_count(6);

        const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const r0 = F.pmap<number, number>(e => e ** e)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.pmap(e => e ** e, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        F.parallel_set_fetch_count(6);

        const a = 'hello world';

        const r0 = F.pmap<string, string>(e => e + e)(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.pmap(e => e + e, a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Promise Value', async () => {
        F.parallel_set_fetch_count(6);

        const a = [Promise.resolve(1), 2, 3, 4, 5, 6, 7, 8, 9, Promise.resolve(10)];

        const r0 = F.pmap<number, number>(e => e ** e)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.pmap(e => e ** e, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Custom Iterable', async () => {
        const a = {
            // tslint:disable-next-line: object-literal-shorthand
            [Symbol.iterator]: function *() {
                yield* F.range(50);
            },
        };

        const b = {
            // tslint:disable-next-line: object-literal-shorthand
            [Symbol.asyncIterator]: async function *() {
                yield* F.range(50);
            }
        };

        F.parallel_set_fetch_count(6);

        const ar0 = F.pmap<number, number>(e => e ** e)(a); // $ExpectType AsyncIterableIterator<number>
        const ar1 = F.pmap(e => e ** e, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));

        const br0 = F.pmap<number, number>(e => e ** e)(b); // $ExpectType AsyncIterableIterator<number>
        const br1 = F.pmap(e => e ** e, b); // $ExpectType AsyncIterableIterator<number>

        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });
});

describe('pfilter', () => {
    it('from Normal Value', async () => {
        F.parallel_set_fetch_count(6);

        const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const r0 = F.pfilter<number>(e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.pfilter(e => e % 2 === 0, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        F.parallel_set_fetch_count(6);

        const a = 'hello world';

        const r0 = F.pfilter<string>(e => e === 'l')(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.pfilter(e => e === 'l', a); // $ExpectType AsyncIterableIterator<string>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Promise Value', async () => {
        F.parallel_set_fetch_count(6);

        const a = [Promise.resolve(1), 2, 3, 4, 5, 6, 7, 8, 9, Promise.resolve(10)];

        const r0 = F.pfilter<number>(e => e % 2 === 0)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.pfilter(e => e % 2 === 0, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Custom Iterable', async () => {
        const a = {
            // tslint:disable-next-line: object-literal-shorthand
            [Symbol.iterator]: function *() {
                yield* F.range(50);
            },
        };

        const b = {
            // tslint:disable-next-line: object-literal-shorthand
            [Symbol.asyncIterator]: async function *() {
                yield* F.range(50);
            }
        };

        F.parallel_set_fetch_count(6);

        const ar0 = F.pfilter<number>(e => e > 2)(a); // $ExpectType AsyncIterableIterator<number>
        const ar1 = F.pfilter(e => e > 2, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(ar0).then(ifNilThrow(new Error()));
        await F.collect(ar1).then(ifNilThrow(new Error()));

        const br0 = F.pfilter<number>(e => e > 2)(b); // $ExpectType AsyncIterableIterator<number>
        const br1 = F.pfilter(e => e > 2, b); // $ExpectType AsyncIterableIterator<number>

        await F.collect(br0).then(ifNilThrow(new Error()));
        await F.collect(br1).then(ifNilThrow(new Error()));
    });
});

describe('pcalls', () => {
    it('from Generator Function', async () => {
        function* gfn0() {
            yield () => 1;
            yield () => 2;
            yield async () => 3;
            yield async () => (async () => 4)();
        }

        const r0 = F.pcalls(gfn0()); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from Async Generator Function', async () => {
        async function* gfn0() {
            yield () => 1;
            yield () => 2;
            yield async () => 3;
            yield async () => (async () => 4)();
        }
        const r0 = F.pcalls(gfn0()); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from Normal Functions / Async Functions', async () => {
        const fn0 = () => 1;
        const fn1 = () => 2;
        const fn2 = async () => 3;
        const fn3 = async () => (async () => 4)();

        const r0 = F.pcalls(fn0, fn1, fn2, fn3); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        function* gfn0() {
            yield () => 1;
            yield () => 'a';
            yield async () => 3;
            yield async () => (async () => 'b')();
        }

        const fn0 = () => 1;
        const fn1 = () => 'a';
        const fn2 = async () => 3;
        const fn3 = async () => (async () => 'b')();

        const r0 = F.pcalls(gfn0()); // $ExpectType AsyncIterableIterator<string | number>

        const r1 = F.pcalls<number | string>(fn0, fn1, fn2, fn3); // $ExpectType AsyncIterableIterator<string | number>
        // const r2 = F.pcalls(fn0, fn1, fn2, fn3);

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});

describe('pfmap', () => {
    it('from Normal Value', async () => {
        const a = [[1], [2], [3], [4], [5]];

        const r0 = F.pfmap<typeof a, number[]>(e => e)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.pfmap(e => e, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Promise Value', async () => {
        const a = [Promise.resolve([1]), [Promise.resolve(2)], [3], [4], [5]];

        const r0 = F.pfmap<typeof a, number[] | Promise<number>[]>(e => e)(a); // $ExpectType AsyncIterableIterator<number>
        const r1 = F.pfmap(e => e, a); // $ExpectType AsyncIterableIterator<number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from String', async () => {
        const a = 'hello world';

        const r0 = F.pfmap<typeof a, string>(e => e)(a); // $ExpectType AsyncIterableIterator<string>
        const r1 = F.pfmap(e => [[e]], a); // $ExpectType AsyncIterableIterator<string[]>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });

    it('from Normal / Promise Union', async () => {
        const a = [[1], [Promise.resolve('a')], [2], [Promise.resolve(3)], Promise.resolve([4]), Promise.resolve(['b'])];

        const r0 = F.pfmap<typeof a, number[] | string[] | Promise<string>[] | Promise<number>[]>(e => e)(a); // $ExpectType AsyncIterableIterator<string | number>
        const r1 = F.pfmap(e => e, a); // $ExpectType AsyncIterableIterator<string | number>

        await F.collect(r0).then(ifNilThrow(new Error()));
        await F.collect(r1).then(ifNilThrow(new Error()));
    });
});
