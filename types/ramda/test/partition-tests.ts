import * as R from 'ramda';

() => {
    // $ExpectType [string[], string[]]
    R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [("foo" | "sss" | "ttt" | "bars")[], ("foo" | "sss" | "ttt" | "bars")[]] || [("sss" | "ttt" | "foo" | "bars")[], ("sss" | "ttt" | "foo" | "bars")[]]
    R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [number[], number[]]
    R.partition((x: number) => x > 2, [1, 2, 3, 4]);
    // $ExpectType [(2 | 1 | 4 | 3)[], (2 | 1 | 4 | 3)[]] || [(2 | 1 | 3 | 4)[], (2 | 1 | 3 | 4)[]] || [(2 | 3 | 1 | 4)[], (2 | 3 | 1 | 4)[]]
    R.partition((x: number) => x > 2)([1, 2, 3, 4]);
    // $ExpectType [number[], number[]]
    R.partition(x => x > 2, [1, 2, 3, 4]);
    // $ExpectType [Partial<{ a: string; b: string; foo: string; }>, Partial<{ a: string; b: string; foo: string; }>]
    R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
    const obj: { a: 'sss', b: 'ttt', foo: 'bars' } = { a: 'sss', b: 'ttt', foo: 'bars' };
    // $ExpectType [Partial<{ a: "sss"; b: "ttt"; foo: "bars"; }>, Partial<{ a: "sss"; b: "ttt"; foo: "bars"; }>]
    R.partition(R.includes('s'), obj);
    const a: Record<string, number> = { a: 1 };
    // $ExpectType [Partial<Record<string, number>>, Partial<Record<string, number>>]
    R.partition((x: number) => x > 2, a);
    const a2: Readonly<Record<string, number>> = { a: 1 };
    // $ExpectType [Partial<Readonly<Record<string, number>>>, Partial<Readonly<Record<string, number>>>]
    R.partition((x: number) => x > 2, a2);
    const a3: Readonly<{ a: 1; }> = { a: 1 };
    // $ExpectType [Partial<Readonly<{ a: 1; }>>, Partial<Readonly<{ a: 1; }>>]
    R.partition((x: number) => x > 2, a3);
    const b: Record<'a', 'b'> = { a: 'b' };
    // $ExpectType [Partial<Record<"a", "b">>, Partial<Record<"a", "b">>]
    R.partition(R.includes('s'), b);
};
