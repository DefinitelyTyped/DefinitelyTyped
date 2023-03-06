import * as R from 'ramda';

() => {
    interface ObjWithCount {
        count?: number;
    }

    // $ExpectType (a: unknown) => { count: number; } | (Record<"count", number> & Omit<unknown, "count">)
    const incCount = R.ifElse(
        R.has('count'),
        obj => ({ ...obj, count: (obj as Required<ObjWithCount>).count + 1 }),
        R.assoc('count', 1),
    );
    incCount({}); // => { count: 1 }

    incCount({ count: 1 }); // => { count: 2 }

    // $ExpectType (a: number, b: number) => string | number
    const addWhenEquals = R.ifElse(
        (a: any, b: any) => a === b,
        (a: number, b: number) => a + b,
        R.always(''),
    );

    addWhenEquals(1, 2); // => ''
    addWhenEquals(1, 1); // => 2

    // $ExpectType (a: string | number) => number
    const getLengthIfStringElseDouble = R.ifElse(
        (a: string | number): a is string => true,
        a => a.length,
        a => a * 2,
    );

    getLengthIfStringElseDouble('foo'); // => 3
    getLengthIfStringElseDouble(3); // => 6

    /**
     * This is to make sure, that the typeguard doesn't make things worse
     * for the else clause. We are not smarter in a case like this in
     * the else clause, but a least we still get the original type,
     * while still having a working typeguard for the else clause
     * for simple union types.
     */
    // $ExpectType (a: { foo?: string | undefined; bar: string | number; }) => [string, string] | [string | undefined, string | number]
    R.ifElse(
        (a: { foo?: string; bar: number | string }): a is { foo: string; bar: string } => true,
        (a): [string, string] => [a.foo, a.bar],
        (a): [string | undefined, string | number] => [a.foo, a.bar],
    );
};
