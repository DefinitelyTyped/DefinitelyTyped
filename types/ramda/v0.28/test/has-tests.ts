import * as R from 'ramda';

() => {
    const hasName = R.has('name');
    const a1: boolean = hasName({ name: 'alice' }); // => true
    const a2: boolean = hasName({ name: 'bob' }); // => true
    const a3: boolean = hasName({}); // => false
};

() => {
    R.has(R.__, { x: 0, y: 0 })('x'); // true;
    R.has(R.__)({ x: 0, y: 0 }, 'x'); // true;
};

// R.has() can be used as a type guard
() => {
    const foo: unknown = {};

    () => {
        if (R.has('name', foo)) console.log(foo.name);
        if (R.has('name')(foo)) console.log(foo.name);
        if (R.has(R.__)(foo, 'name')) console.log(foo.name);
    };

    () => {
        const key = 'name';

        if (R.has(key as 'name' | 'weight', foo)) {
            // $ExpectType { name: unknown; } | { weight: unknown; }
            const bar = foo;
        }

        if (R.has(key as string, foo)) {
            // $ExpectType { [x: string]: unknown; }
            const bar = foo;
        }
    };
};

// The key argument needs to be compatible to string
() => {
    // @ts-expect-error
    R.has(4, {});
    // @ts-expect-error
    R.has(4);
    // @ts-expect-error
    R.has(R.__, {})(4);
    // @ts-expect-error
    R.has(R.__)({}, 4);

    // @ts-expect-error
    R.has(null, {});
    // @ts-expect-error
    R.has(null);
    // @ts-expect-error
    R.has(R.__, {})(null);
    // @ts-expect-error
    R.has(R.__)({}, null);
};
