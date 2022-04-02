import * as R from 'ramda';

() => {
    // $ExpectType [string[], string[]]
    R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [string[], string[]]
    R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [number[], number[]]
    R.partition((x: number) => x > 2, [1, 2, 3, 4]);
    // $ExpectType [number[], number[]]
    R.partition((x: number) => x > 2)([1, 2, 3, 4]);
    // $ExpectType [number[], number[]]
    R.partition(x => x > 2, [1, 2, 3, 4]);
    // $ExpectType [Partial<{ a: string; b: string; foo: string; }>, Partial<{ a: string; b: string; foo: string; }>]
    R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
    // $ExpectType [Partial<{ a: "sss"; b: "ttt"; foo: "bars"; }>, Partial<{ a: "sss"; b: "ttt"; foo: "bars"; }>]
    R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' } as const);
    let a: Record<string, number> = {};
    // $ExpectType [Partial<{ [x: string]: number; }>, Partial<{ [x: string]: number; }>]
    R.partition((x: number) => x > 2, a);
    let b: Record<'a', 'b'> = { a: 'b' };
    // $ExpectType [Partial<{ a: "b"; }>, Partial<{ a: "b"; }>]
    R.partition(R.includes('s'), b);
};
