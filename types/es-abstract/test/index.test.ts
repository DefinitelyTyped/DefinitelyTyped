import ESAbstract = require("es-abstract");

import ES5 = require("es-abstract/es5");
import ES6 = require("es-abstract/es6");
import ES7 = require("es-abstract/es7");

import ES2015 = require("es-abstract/es2015");
import ES2016 = require("es-abstract/es2016");
import ES2017 = require("es-abstract/es2017");
import ES2018 = require("es-abstract/es2018");
import ES2019 = require("es-abstract/es2019");
import ES2020 = require("es-abstract/es2020");
import ES2021 = require("es-abstract/es2021");
import ES2022 = require("es-abstract/es2022");
import ES2023 = require("es-abstract/es2023");
import ES2024 = require("es-abstract/es2024");
import ES2025 = require("es-abstract/es2025");

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
export declare function expectType<T>(value: T): T;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export declare function newType<T>(): T;

expectType<typeof ES5>(ESAbstract.ES5); // $ExpectType ES5

expectType<typeof ES6>(ESAbstract.ES6); // $ExpectType ES2015
expectType<typeof ES2015>(ESAbstract.ES6); // $ExpectType ES2015
expectType<typeof ES2015>(ESAbstract.ES2015); // $ExpectType ES2015
expectType<typeof ES6>(ESAbstract.ES2015); // $ExpectType ES2015

expectType<typeof ES7>(ESAbstract.ES7); // $ExpectType ES2016
expectType<typeof ES2016>(ESAbstract.ES7); // $ExpectType ES2016
expectType<typeof ES2016>(ESAbstract.ES2016); // $ExpectType ES2016
expectType<typeof ES7>(ESAbstract.ES2016); // $ExpectType ES2016

expectType<typeof ES2017>(ESAbstract.ES2017); // $ExpectType ES2017
expectType<typeof ES2018>(ESAbstract.ES2018); // $ExpectType ES2018
expectType<typeof ES2019>(ESAbstract.ES2019); // $ExpectType ES2019
expectType<typeof ES2020>(ESAbstract.ES2020); // $ExpectType ES2020
expectType<typeof ES2021>(ESAbstract.ES2021); // $ExpectType ES2021
expectType<typeof ES2022>(ESAbstract.ES2022); // $ExpectType ES2022
expectType<typeof ES2023>(ESAbstract.ES2023); // $ExpectType ES2023
expectType<typeof ES2024>(ESAbstract.ES2024); // $ExpectType ES2024
expectType<typeof ES2025>(ESAbstract.ES2025); // $ExpectType ES2025

// Removed in ES2015:
// @ts-expect-error
ESAbstract.CheckObjectCoercible;
