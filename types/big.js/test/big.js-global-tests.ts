/*

  This file contains tests for the globally exported big.js definitions.
  Use the global Big constructor and the types in the global BigJs namespace.
  Do not import anything from 'big.js'

  Tests include code from http://mikemcl.github.io/big.js/

  Minor changes have been made such as adding variable definitions where required.

*/

function constructorTests() {
    const x = new Big(9); // '9'
    const y = new Big(x); // '9'
    const d = Big(435.345); // 'new' is optional
    const e = Big('435.345'); // 'new' is optional
    const a = new Big('5032485723458348569331745.33434346346912144534543');
    const b = new Big('4.321e+4'); // '43210'
    const c = new Big('-735.0918e-430'); // '-7.350918e-428'
}

function staticPropertiesTests() {
    Big.DP = 40;
    Big.RM = 3;
    Big.RM = BigJs.RoundingMode.RoundUp;
}

function absTests() {
    const x = new Big(-0.8);
    x.abs(); // '0.8'
}

function cmpTests() {
    const x = new Big(6);
    const y = new Big(5);
    x.cmp(y); // 1
    y.cmp(x.minus(1)); // 0
}

function divTests() {
    const x = new Big(355);
    const y = new Big(113);
    x.div(y); // '3.14159292035398230088'
    Big.DP = 2;
    x.div(y); // '3.14'
    x.div(5); // '71'
}

function eqTests() {
    0 === 1e-324; // true
    const x = new Big(0);
    x.eq('1e-324'); // false
    Big(-0).eq(x); // true  ( -0 === 0 )
}

function gtTests() {
    0.1 > 0.3 - 0.2; // true
    const x = new Big(0.1);
    x.gt(Big(0.3).minus(0.2)); // false
    Big(0).gt(x); // false
}

function gteTests() {
    0.3 - 0.2 >= 0.1; // false
    const x = new Big(0.3).minus(0.2);
    x.gte(0.1); // true
    Big(1).gte(x); // true
}

function ltTests() {
    0.3 - 0.2 < 0.1; // true
    const x = new Big(0.3).minus(0.2);
    x.lt(0.1); // false
    Big(0).lt(x); // true
}

function lteTests() {
    0.1 <= 0.3 - 0.2; // false
    const x = new Big(0.1);
    x.lte(Big(0.3).minus(0.2)); // true
    Big(-1).lte(x); // true
}

function minusTests() {
    0.3 - 0.1; // 0.19999999999999998
    const x = new Big(0.3);
    x.minus(0.1); // '0.2'
}

function modTests() {
    1 % 0.9; // 0.09999999999999998
    const x = Big(1);
    x.mod(0.9); // '0.1'
}

function plusTests() {
    0.1 + 0.2; // 0.30000000000000004
    const x = new Big(0.1);
    const y = x.plus(0.2); // '0.3'
    Big(0.7).plus(x).plus(y); // '1'
}

function powTests() {
    Math.pow(0.7, 2); // 0.48999999999999994
    const x = new Big(0.7);
    x.pow(2); // '0.49'
    Big.DP = 20;
    Big(3).pow(-2); // '0.11111111111111111111'

    new Big(123.456).pow(1000).toString().length; // 5099
    new Big(2).pow(1e+6); // Time taken (Node.js): 9 minutes 34 secs.
}

function roundTests() {
    const x = 123.45;
    Math.round(x); // 123
    const y = new Big(x);
    y.round(); // '123'
    y.round(2); // '123.45'
    y.round(10); // '123.45'
    y.round(1, 0); // '123.4'
    y.round(1, 1); // '123.5'
    y.round(1, 2); // '123.4'
    y.round(1, 3); // '123.5'
    y; // '123.45'
}

function sqrtTests() {
    const x = new Big(16);
    x.sqrt(); // '4'
    const y = new Big(3);
    y.sqrt(); // '1.73205080756887729353'
}

function timesTests() {
    0.6 * 3; // 1.7999999999999998
    const x = new Big(0.6);
    const y = x.times(3); // '1.8'
    Big('7e+500').times(y); // '1.26e+501'
}

function toExponentialTests() {
    const x = 45.6;
    const y = new Big(x);
    x.toExponential(); // '4.56e+1'
    y.toExponential(); // '4.56e+1'
    x.toExponential(0); // '5e+1'
    y.toExponential(0); // '5e+1'
    x.toExponential(1); // '4.6e+1'
    y.toExponential(1); // '4.6e+1'
    x.toExponential(3); // '4.560e+1'
    y.toExponential(3); // '4.560e+1'
}

function toFixedTests() {
    const x = 45.6;
    const y = new Big(x);
    x.toFixed(); // '46'
    y.toFixed(); // '45.6'
    y.toFixed(0); // '46'
    x.toFixed(3); // '45.600'
    y.toFixed(3); // '45.600'
}

function toPrecisionTests() {
    const x = 45.6;
    const y = new Big(x);
    x.toPrecision(); // '45.6'
    y.toPrecision(); // '45.6'
    x.toPrecision(1); // '5e+1'
    y.toPrecision(1); // '5e+1'
    x.toPrecision(5); // '45.600'
    y.toPrecision(5); // '45.600'
}

function toStringTests() {
    const x = new Big('9.99e+20');
    x.toString(); // '999000000000000000000'
    const y = new Big('1E21');
    x.toString(); // '1e+21'
}

function valueOfTests() {
    const x = new Big('177.7e+457');
    x.valueOf(); // '1.777e+459'
}

function toJSONTests() {
    const x = new Big('177.7e+457');
    const y = new Big(235.4325);
    const z = new Big('0.0098074');
    const str = JSON.stringify([x, y, z]);

    const a = new Big('123').toJSON();

    JSON.parse(str, (k, v)  => k === '' ? v : new Big(v)); // Returns an array of three Big numbers.
}

// test Big.c
function coefficientTests() {
    const x = new Big('123');
    x.c; // [1,2,3]
}

// test Big.e
function exponentTests() {
    const x = new Big('123e+20');
    x.e; // 22
}

// test Big.s
function signTests() {
    const x = new Big('-123');
    x.s; // -1
}

// see http://mikemcl.github.io/big.js/#faq
// "How can I simultaneously use different decimal places and/or rounding mode settings for different Big numbers?"
function testMultipleConstructors() {
    const Big10 = Big();

    // Set the decimal places of division operations for each constructor.
    Big.DP = 3;
    Big10.DP = 10;

    const x = Big(5);
    const y = Big10(5);

    x.div(3); // 1.667
    y.div(3); // 1.6666666667
}

function multipleTypesAccepted(n: number | BigJs.Big | string) {
    const y = Big(n)
        .minus(n)
        .mod(n)
        .plus(n)
        .times(n);
    y.cmp(n);
    y.eq(n);
    y.gt(n);
    y.gte(n);
    y.lt(n);
    y.lte(n);
    y.div(n);
}
