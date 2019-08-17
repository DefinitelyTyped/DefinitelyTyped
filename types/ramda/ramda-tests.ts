import * as R from "ramda";

/** R.__ */
() => {
};

() => {
    interface A {
        a: number;
    }

    interface B {
        b: number;
    }

    const As = [{ a: 1 }, { a: 2 }];
    const AsToBs: (a: A[]) => B[] = R.map((a: A): B => ({
        b: a.a,
    }));

    function test(): B[] {
        return R.into<A, B>([], AsToBs, As);
    }
    test(); // => [{ b: 1 }, { b: 2 }]
};
