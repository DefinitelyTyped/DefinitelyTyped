import * as R from 'ramda';

() => {
    // $ExpectType [string[], string[]]
    R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [("foo" | "sss" | "ttt" | "bars")[], ("foo" | "sss" | "ttt" | "bars")[]]
    R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [number[], number[]]
    R.partition((x: number) => x > 2, [1, 2, 3, 4]);
    // $ExpectType [(2 | 1 | 4 | 3)[], (2 | 1 | 4 | 3)[]]
    R.partition((x: number) => x > 2)([1, 2, 3, 4]);
    // $ExpectType [number[], number[]]
    R.partition(x => x > 2, [1, 2, 3, 4]);
    // $ExpectType [Partial<{ a: string; b: string; foo: string; }>, Partial<{ a: string; b: string; foo: string; }>]
    R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
    const obj: { a: 'sss', b: 'ttt', foo: 'bars' } = { a: 'sss', b: 'ttt', foo: 'bars' };
    // $ExpectType [Partial<{ a: "sss"; b: "ttt"; foo: "bars"; }>, Partial<{ a: "sss"; b: "ttt"; foo: "bars"; }>]
    R.partition(R.includes('s'), obj);
    const a: Record<string, number> = { a: 1 };
    // $ExpectType [Partial<{ [x: string]: number; }>, Partial<{ [x: string]: number; }>]
    R.partition((x: number) => x > 2, a);
    const b: Record<'a', 'b'> = { a: 'b' };
    // $ExpectType [Partial<{ a: "b"; }>, Partial<{ a: "b"; }>]
    R.partition(R.includes('s'), b);
};
