
const numberToNumber = (a: number): number => a + 2;
const numberToString = (a: number): string => "foo";
const stringToNumber = (a: string): number => 5;

import composeFunction = require("compose-function");
const t1: number = composeFunction(numberToNumber, numberToNumber)(5);
const t2: string = composeFunction(numberToString, numberToNumber)(5);
const t3: string = composeFunction(numberToString, stringToNumber)("f");
const t4: (a: string) => number = composeFunction(
    (f: (a: string) => number) => ((p: string): number => 5),
    (f: (a: number) => string) => ((p: string) => 4)
    )(numberToString);


const t5: number = composeFunction(stringToNumber, numberToString, numberToNumber)(5);
const t6: string = composeFunction(numberToString, stringToNumber, numberToString, numberToNumber)(5);

const t7: string = composeFunction<string>(
    numberToString, numberToNumber, stringToNumber, numberToString, stringToNumber)("fo");
