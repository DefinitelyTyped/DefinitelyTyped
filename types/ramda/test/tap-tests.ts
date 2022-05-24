import * as R from 'ramda';

() => {
    const consoleInput = (input: number) => console.log('input is: ' + input);
    // $ExpectType (value: number) => number
    const tapConsoleInput = R.tap(consoleInput);
    // $ExpectType number
    const a: number = tapConsoleInput(100); // => 100
};
