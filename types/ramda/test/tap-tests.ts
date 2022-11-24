import * as R from 'ramda';

() => {
    const consoleInput = (input: number) => console.log('input is: ' + input);
    // $ExpectType (value: number) => number
    const tapConsoleInput = R.tap(consoleInput);
    // $ExpectType number
    const a: number = tapConsoleInput(100); // => 100
};

() => {
    const assertsInput = (input: string | number): asserts input is number => {
        if (typeof input !== 'number') {
            throw new Error('input is not number');
        }
        console.log('input is: ' + input);
    };
    // $ExpectType (value: string | number) => number
    const tapUnionTypeInput = R.tap(assertsInput);

    const stringOrNumber: string | number = 100;
    // $ExpectType number
    const a: number = tapUnionTypeInput(stringOrNumber); // => 100
};
