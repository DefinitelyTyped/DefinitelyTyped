import * as R from 'ramda';

() => {
    interface ObjWithCount {
        count?: number;
    }

    // $ExpectType (obj: unknown) => { count: number; } | (Record<"count", number> & Omit<unknown, "count">)
    const incCount = R.ifElse(
        R.has('count'),
        (obj: Required<ObjWithCount>) => ({ ...obj, count: obj.count + 1 }),
        R.assoc('count', 1),
    );
    incCount({}); // => { count: 1 }

    incCount({ count: 1 }); // => { count: 2 }

    // $ExpectType (...args: unknown[]) => string | number
    const addWhenEquals = R.ifElse(
        (a: any, b: any) => a === b,
        (a: number, b: number) => a + b,
        R.always(''),
    );

    addWhenEquals(1, 2); // => ''
    addWhenEquals(1, 1); // => 2

    type stringOrObject = string | { [key: string]: any };
    const isString = (o: stringOrObject): o is string => typeof o === 'string';
    function takeObject(o: { [key: string]: any }) {
        return Object.keys(o);
    }
    function takeString(s: string) {
        return s + 'bar';
    }

    // $ExpectType (args: stringOrObject) => string | string[]
    const barWhenStringKeysWhenObject = R.ifElse(isString, takeString, takeObject);
    barWhenStringKeysWhenObject('foo'); // => 'foobar'
    barWhenStringKeysWhenObject({ a: 1, b: 2, c: 3 }); // => ['a', 'b', 'c']
};
