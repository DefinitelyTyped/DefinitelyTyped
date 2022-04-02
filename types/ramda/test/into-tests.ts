import * as R from 'ramda';

() => {
    const numbers = [1, 2, 3, 4];
    const transducer = R.compose(R.map(R.add(1)), R.take(2));

    // $ExpectType number[]
    R.into([], transducer, numbers); // => [2, 3]

    const intoArray = R.into([]);
    // $ExpectType number[]
    intoArray(transducer, numbers); // => [2, 3]
};

() => {
    interface A {
        a: number;
    }

    interface B {
        b: number;
    }

    const As = [{ a: 1 }, { a: 2 }];
    const AsToBs: (a: A[]) => B[] = R.map(
        (a: A): B => ({
            b: a.a,
        }),
    );

    function test(): B[] {
        // $ExpectType B[]
        const result = R.into<A, B>([], AsToBs, As);
        return result;
    }
    test(); // => [{ b: 1 }, { b: 2 }]
};
