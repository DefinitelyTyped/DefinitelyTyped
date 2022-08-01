import * as R from 'ramda';

() => {
    const list = ['foo', 'bar', 'baz', 'quux'];

    // $ExpectType <T extends string | readonly any[]>(list: T) => (T extends (infer E)[] ? E : string) | undefined
    R.nth(1); // => 'b'

    // $ExpectType string | undefined
    R.nth(1, list); // => 'bar'

    // $ExpectType string | undefined
    R.nth(-1, list); // => 'quux'

    // $ExpectType string | undefined
    R.nth(99, list); // => undefined

    // $ExpectType string | undefined
    R.nth(1)(list); // => 'bar'

    // $ExpectType string | undefined
    R.nth(-99)(list); // => undefined
};

() => {
    const str = 'abcd';

    // $ExpectType string
    R.nth(1, str); // => 'b'

    // $ExpectType string
    R.nth(-1, str); // => 'd'

    // $ExpectType string
    R.nth(99, str); // => ''

    // $ExpectType string | undefined
    R.nth(1)(str); // => 'b'

    // $ExpectType string | undefined
    R.nth(-99)(str); // => ''
};

() => {
    // @ts-expect-error
    R.nth();

    // @ts-expect-error
    R.nth(1, {});

    // @ts-expect-error
    R.nth(1, '', 1);
};

async () => {
    const promise = Promise.resolve([1, 2, 3]);

    // $ExpectType number | undefined
    const el = await promise.then(R.nth(0));
};
