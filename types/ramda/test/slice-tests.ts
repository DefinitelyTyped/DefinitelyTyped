import * as R from 'ramda';

() => {
    const xs = R.range(0, 10);
    R.slice(2, 5, xs); // => [2, 3, 4]
    R.slice(2, 5)(xs); // => [2, 3, 4]
    R.slice(2)(5, xs); // => [2, 3, 4]

    const str = 'Hello World';
    R.slice(2, 5, str); // => 'llo'
    R.slice(2, 5)(str); // => 'llo'
    R.slice(2)(5, str); // => 'llo'
};

() => {
    // check generic type works
    interface A {
        text: string;
    }

    const arr: A[] = [{ text: 'one' }, { text: 'two' }, { text: 'three' }, { text: 'four' }];

    const sliceFromSecondToThird = R.slice(1, 3);

    sliceFromSecondToThird<A>(arr); // => [ { text: 'two' }, { text: 'three' } ]

    // @ts-expect-error
    sliceFromSecondToThird<string>(arr);

    const sliceFromSecondTo = R.slice(1);

    sliceFromSecondTo<A>(3, arr); // => [ { text: 'two' }, { text: 'three' } ]

    // @ts-expect-error
    sliceFromSecondTo<string>(3, arr);
};

() => {
    // make type inference work well
    const str = 'Hello World';
    const arr = ['one', 'two', 'three', 'four', 'five'];

    // $ExpectType (list: string) => string
    const pipeSlice = R.pipe(R.slice(2, 5));
    // $ExpectType string
    pipeSlice(str); // => 'llo'

    // $ExpectType string[]
    R.pipe((str: string[]) => R.slice(2, 5)(str))(arr); // => ['three', 'four', 'five']

    // $ExpectType string
    R.pipe(R.slice(2))(5, str); // => 'llo'

    // $ExpectType string[]
    R.pipe((b: number, str: string[]) => R.slice(2)(b, str))(5, arr); // => ['three', 'four', 'five']
};
