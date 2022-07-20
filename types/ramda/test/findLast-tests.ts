import * as R from 'ramda';

() => {
    const xs = [
        { a: 1, b: 0 },
        { a: 1, b: 1 },
    ];
    R.findLast(R.propEq('a', 1))(xs); // => {a: 1, b: 1}
    R.findLast(R.propEq('a', 4))(xs); // => undefined
};

() => {
    const findLastNumber = R.findLast(R.is(Number));

    const unknownArray: unknown[] = [];
    let number: number | undefined;
    let string: string | undefined;

    number = R.findLast(R.is(Number), unknownArray);
    number = findLastNumber(unknownArray);
    // @ts-expect-error
    string = R.findLast(R.is(Number), unknownArray);
    // @ts-expect-error
    string = findLastNumber(unknownArray);
};
