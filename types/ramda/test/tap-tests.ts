import * as R from 'ramda';

() => {
    const consoleInput = (input: number) => console.log('input is: ' + input);
    // $ExpectType <U extends number>(value: U) => U
    const tapConsoleInput = R.tap(consoleInput);
    // $ExpectType 100
    tapConsoleInput(100); // => 100
    // $ExpectType <U extends number>(value: U) => U
    R.tap<number>(consoleInput);
};
