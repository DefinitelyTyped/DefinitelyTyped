// Type definitions for big.js
// Project: https://github.com/MikeMcl/big.js/
// Definitions by: Steve Ognibene <https://github.com/nycdotnet/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
///<reference path="big.js.d.ts" />

/*

  Tests include code from http://mikemcl.github.io/big.js/

  Minor changes have been made such as adding variable definitions where required.
  
*/

function constructorTests() {
    var x = new Big(9)                       // '9'
    var y = new Big(x)                       // '9'
    var d = Big(435.345)                         // 'new' is optional
    var e = Big('435.345')                         // 'new' is optional
    var a = new Big('5032485723458348569331745.33434346346912144534543')
    var b = new Big('4.321e+4')                  // '43210'
    var c = new Big('-735.0918e-430')            // '-7.350918e-428'
}

function staticPropertiesTests() {
    Big.DP = 40;
    Big.RM = 3;
    Big.RM = BigJsLibrary.RoundingMode.RoundAwayFromZero;
}

function absTests() {
    var x = new Big(-0.8);
    x.abs();                     // '0.8'
}

function cmpTests() {
    var x = new Big(6);
    var y = new Big(5);
    x.cmp(y);              // 1
    y.cmp(x.minus(1));          // 0
}

function divTests() {
    var x = new Big(355);
    var y = new Big(113);
    x.div(y);                   // '3.14159292035398230088'
    Big.DP = 2;
    x.div(y);                   // '3.14'
    x.div(5);                   // '71'
}

function eqTests() {
    0 === 1e-324;               // true
    var x = new Big(0);
    x.eq('1e-324');             // false
    Big(-0).eq(x);              // true  ( -0 === 0 )
}

function gtTests() {
    0.1 > 0.3 - 0.2;              // true
    var x = new Big(0.1);
    x.gt(Big(0.3).minus(0.2));    // false
    Big(0).gt(x);                 // false
}

function gteTests() {
    0.3 - 0.2 >= 0.1;               // false
    var x = new Big(0.3).minus(0.2);
    x.gte(0.1);                     // true
    Big(1).gte(x);                  // true
}

function ltTests() {
    0.3 - 0.2 < 0.1;                // true
    var x = new Big(0.3).minus(0.2);
    x.lt(0.1);                     // false
    Big(0).lt(x);                   // true
}

function lteTests() {
    0.1 <= 0.3 - 0.2;               // false
    var x = new Big(0.1);
    x.lte(Big(0.3).minus(0.2));     // true
    Big(-1).lte(x);                 // true
}

function minusTests() {
    0.3 - 0.1;                  // 0.19999999999999998
    var x = new Big(0.3);
    x.minus(0.1);               // '0.2'
}

function modTests() {
    1 % 0.9                    // 0.09999999999999998
    var x = Big(1);
    x.mod(0.9)                 // '0.1'
}

function plusTests() {
    0.1 + 0.2                  // 0.30000000000000004
    var x = new Big(0.1)
    var y = x.plus(0.2)            // '0.3'
    Big(0.7).plus(x).plus(y)   // '1'
}

function powTests() {
    Math.pow(0.7, 2)           // 0.48999999999999994
    var x = new Big(0.7)
    x.pow(2)                   // '0.49'
    Big.DP = 20
    Big(3).pow(-2)             // '0.11111111111111111111'

    new Big(123.456).pow(1000).toString().length     // 5099
    new Big(2).pow(1e+6)       // Time taken (Node.js): 9 minutes 34 secs.
}

function roundTests() {
    var x = 123.45
    Math.round(x)              // 123
    var y = new Big(x)
    y.round()                  // '123'
    y.round(2)                 // '123.45'
    y.round(10)                // '123.45'
    y.round(1, 0)              // '123.4'
    y.round(1, 1)              // '123.5'
    y.round(1, 2)              // '123.4'
    y.round(1, 3)              // '123.5'
    y                          // '123.45'
}

function sqrtTests() {
    var x = new Big(16)
    x.sqrt()                   // '4'
    var y = new Big(3)
    y.sqrt()                   // '1.73205080756887729353'
}

function timesTests() {
    0.6 * 3                    // 1.7999999999999998
    var x = new Big(0.6)
    var y = x.times(3)             // '1.8'
    Big('7e+500').times(y)     // '1.26e+501'
}

function toExponentialTests() {
    var x = 45.6
    var y = new Big(x)
    x.toExponential()          // '4.56e+1'
    y.toExponential()          // '4.56e+1'
    x.toExponential(0)         // '5e+1'
    y.toExponential(0)         // '5e+1'
    x.toExponential(1)         // '4.6e+1'
    y.toExponential(1)         // '4.6e+1'
    x.toExponential(3)         // '4.560e+1'
    y.toExponential(3)         // '4.560e+1'
}

function toFixedTests() {
    var x = 45.6
    var y = new Big(x)
    x.toFixed()                // '46'
    y.toFixed()                // '45.6'
    y.toFixed(0)               // '46'
    x.toFixed(3)               // '45.600'
    y.toFixed(3)               // '45.600'
}

function toPrecisionTests() {
    var x = 45.6
    var y = new Big(x)
    x.toPrecision()            // '45.6'
    y.toPrecision()            // '45.6'
    x.toPrecision(1)           // '5e+1'
    y.toPrecision(1)           // '5e+1'
    x.toPrecision(5)           // '45.600'
    y.toPrecision(5)           // '45.600'
}

function toStringTests() {
    var x = new Big('9.99e+20')
    x.toString()               // '999000000000000000000'
    var y = new Big('1E21')
    x.toString()               // '1e+21'
}

function valueOfTests() {
    var x = new Big('177.7e+457')
    x.valueOf()                // '1.777e+459'
}

function toJSONTests() {
    var x = new Big('177.7e+457')
    var y = new Big(235.4325)
    var z = new Big('0.0098074')
    var str = JSON.stringify([x, y, z])

    var a = new Big('123').toJSON();

    JSON.parse(str, function (k, v) { return k === '' ? v : new Big(v) }) // Returns an array of three Big numbers.
}

function propertiesTest1() {
    var x = new Big(0.123)                 // '0.123'
    x.toExponential()                  // '1.23e-1'
    x.c                                // '1,2,3'
    x.e                                // -1
    x.s                                // 1

    var y = new Number(-123.4567000e+2)    // '-12345.67'
    y.toExponential()                  // '-1.234567e+4'
    var z = new Big('-123.4567000e+2')     // '-12345.67'
    z.toExponential()                  // '-1.234567e+4'
    z.c                                // '1,2,3,4,5,6,7'
    z.e                                // 4
    z.s                                // -1
}

function propertiesTest2() {
    var x = new Big('1234.000')    // '1234'
    x.toExponential()          // '1.234e+3'
    x.c                        // '1,2,3,4'
    x.e                        // 3

    x.e = -5
    x                          // '0.00001234'
}

function propertiesTest3() {
    var y = new Big(-0)            // '0'
    y.c                        // '0'    [0].toString()
    y.e                        // 0
    y.s                        // -1
}