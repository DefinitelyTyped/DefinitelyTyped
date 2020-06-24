// Type definitions for es-abstract 1.16
// Project: https://github.com/ljharb/es-abstract
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import ES5 = require('./es5');
import ES6 = require('./es6');
import ES7 = require('./es7');

import ES2015 = require('./es2015');
import ES2016 = require('./es2016');
import ES2017 = require('./es2017');
import ES2018 = require('./es2018');
import ES2019 = require('./es2019');

declare namespace ESAbstract {
    // ES2015 types:
    type PropertyKey = string | symbol;

    // ES5 types:
    interface GenericDescriptor {
        '[[Configurable]]'?: boolean;
        '[[Enumerable]]'?: boolean;
    }

    interface AccessorDescriptor<T = unknown> extends GenericDescriptor {
        '[[Get]]'?(): T;
        '[[Set]]'?(value: T): void;
    }

    interface DataDescriptor<T = unknown> extends GenericDescriptor {
        '[[Writable]]'?: boolean;
        '[[Value]]'?: T;
    }

    type PropertyDescriptor<T = unknown> = AccessorDescriptor<T> | DataDescriptor<T>;
}

interface ESAbstract extends ES6 {
    readonly ES5: ES5;
    /** @deprecated */
    readonly ES6: ES6;
    /** @deprecated */
    readonly ES7: ES7;

    readonly ES2015: ES2015;
    readonly ES2016: ES2016;
    readonly ES2017: ES2017;
    readonly ES2018: ES2018;
    readonly ES2019: ES2019;
}

declare const ESAbstract: ESAbstract;
export = ESAbstract;
