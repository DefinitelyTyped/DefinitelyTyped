let m = SchemeNumber("1");
let n = SchemeNumber(2);

let sum: SchemeNumber = SchemeNumber.fn["+"](m, n);
sum = SchemeNumber.fn["+"](m, 1);
sum = SchemeNumber.fn["+"](m, "12");
sum = SchemeNumber.fn["+"]("12", "25");

let floored: SchemeNumber = SchemeNumber.fn.floor(m);

let str: string = floored.toString(16);
str = floored.toExponential(2);
str = floored.toPrecision(2);
str = floored.toFixed(2);

let num: number = maxIntegerDigits;
num = VERSION[0];
num = VERSION.length;

raise("fake error", "This is not really an error", m);
