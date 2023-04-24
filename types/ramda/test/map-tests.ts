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

    R.map(double, [1, 2, 3]); // => [2, 4, 6]

    // functor
    const numberFunctor = {
        map: <U>(fn: (c: number) => U) => {
            const chars = 'Ifmmp!Xpsme'.split('');
            return chars.map(char => fn(char.charCodeAt(0)));
        },
    };
    R.map((x: number) => x - 1, numberFunctor); // => "Hello World"
};

() => {
    interface A {
        a: number;
        b: number;
    }

    interface B {
        a: string;
        b: string;
    }

    interface C {
        b: number;
        c: string;
    }

    R.map<A, A>(R.inc, { a: 1, b: 2 });
    R.map<A, B>(R.toString, { a: 1, b: 2 });

    R.map<A, A>(R.inc)({ a: 1, b: 2 });
    R.map<A, B>(R.toString)({ a: 1, b: 2 });

    type KeyOfUnion<T> = T extends infer U ? keyof U : never;

    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType Record<"c" | "a" | "b", void> || Record<"a" | "b" | "c", void>
    R.map<A | C, Record<KeyOfUnion<A | C>, void>>(
        // $ExpectType (value: string | number) => void
        value => {
            value;
        },
        { a: 1, b: 2 },
    );
};
