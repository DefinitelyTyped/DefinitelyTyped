import NumberAbbreviate from "number-abbreviate";

const num: number = 12345;
const strNum: string = "98765";
const nonNumericStr: string = "hello";

// Test the direct function call (shorthand mode)
const res1: string = NumberAbbreviate(1000);
const res2: string = NumberAbbreviate(1111, 0);
const res3: string = NumberAbbreviate(1111, 1);
const res4: string = NumberAbbreviate(1111, 2);
const res5: string = NumberAbbreviate(num);
const res6: string = NumberAbbreviate(strNum, 1);
const res7: string = NumberAbbreviate(-12345);
const res8: string = NumberAbbreviate(123456789, 2, ["k", "M", "B"]);

// @ts-expect-error
NumberAbbreviate("invalid", true, ["a"]);

// Test the class/constructor mode
const numAbbr1 = new NumberAbbreviate();
const res9: string = numAbbr1.abbreviate(12, 1);
const res10: string = numAbbr1.abbreviate(0, 2);
const res11: string = numAbbr1.abbreviate(1234, 0);
const res12: string = numAbbr1.abbreviate(34567, 2);
const res13: string = numAbbr1.abbreviate(918395, 1);
const res14: string = numAbbr1.abbreviate(2134124, 2);
const res15: string = numAbbr1.abbreviate(47475782130, 2);
const res16: string = numAbbr1.abbreviate(-1234, 0);
const res17: string = numAbbr1.abbreviate(-918395, 1);
const res18: string = numAbbr1.abbreviate(-47475782130, 2);
const res19: string = numAbbr1.abbreviate(num, 0);
const res20: string = numAbbr1.abbreviate(strNum);

// @ts-expect-error
numAbbr1.abbreviate("invalid", true);

// Test constructor with custom units
const customUnits = ["A", "B", "C"];
const numAbbr2 = new NumberAbbreviate(customUnits);
const res21: string = numAbbr2.abbreviate(1000, 0);
const res22: string = numAbbr2.abbreviate(1000000, 1);
const res23: string = numAbbr2.abbreviate(1000000000, 2);
const res24: string = numAbbr2.abbreviate(num, 1);
const res25: string = numAbbr2.abbreviate(strNum, 2);

// Test instance properties
const unitsProp1: string[] = numAbbr1.units;
const unitsProp2: string[] = numAbbr2.units;

// Verify `_abbreviate` type (internal, but we typed it)
const internalAbbrResult: string = numAbbr1._abbreviate(12345, 0);
// @ts-expect-error
numAbbr1._abbreviate(123, "not_a_number");

// Test handling of non-numeric strings resulting in NaN (runtime)
const nanResult1: string = NumberAbbreviate(nonNumericStr);
const nanResult2: string = numAbbr1.abbreviate(nonNumericStr);
