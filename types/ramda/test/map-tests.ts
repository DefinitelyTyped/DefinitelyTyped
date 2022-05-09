import * as R from 'ramda';

() => {
    // Flatten all arrays in the list but leave other values alone.
    const flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

    flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}]
    flattenArrays([[[10], 123], [8, [10]], 'hello']); // => [[10, 123], [8, 10], "hello"]
};

() => {
    function double(x: number) {
        return x * 2;
    }

    // $ExpectType number[]
    R.map(double, [1, 2, 3]); // => [2, 4, 6]

    // functor
    const numberFunctor = {
        map: <U>(fn: (c: number) => U) => {
            const chars = 'Ifmmp!Xpsme'.split('');
            return chars.map(char => fn(char.charCodeAt(0)));
        },
    };
    // $ExpectType Functor<number>
    R.map((x: number) => x - 1, numberFunctor); // => "Hello World"
};

() => {
    interface A {
        a: number;
        b: number;
    }

    interface B {
        b: number;
        c: string;
    }

    // $ExpectType Record<"a" | "b", number>
    R.map(R.inc, { a: 1, b: 2 });
    // $ExpectType Record<"a" | "b", string>
    R.map(R.toString, { a: 1, b: 2 });

    // $ExpectType Record<"a" | "b", number>
    R.map(R.inc)({ a: 1, b: 2 });
    // $ExpectType Record<"a" | "b", string>
    R.map(R.toString)({ a: 1, b: 2 });

    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType Record<"c" | "a" | "b", void> || Record<"a" | "b" | "c", void>
    R.map<A | B, void>(
        // $ExpectType (value: string | number) => void
        value => {
            value;
        },
        { a: 1, b: 2 },
    );
};
