import ES5 = require("./es5");
import ES6 = require("./es6");
import ES7 = require("./es7");

import ES2015 = require("./es2015");
import ES2016 = require("./es2016");
import ES2017 = require("./es2017");
import ES2018 = require("./es2018");
import ES2019 = require("./es2019");
import ES2020 = require("./es2020");
import ES2021 = require("./es2021");
import ES2022 = require("./es2022");
import ES2023 = require("./es2023");
import ES2024 = require("./es2024");
import ES2025 = require("./es2025");

declare namespace ESAbstract {
    // ES2015 types:
    type PropertyKey = string | symbol;

    // ES5 types:
    interface GenericDescriptor {
        "[[Configurable]]"?: boolean | undefined;
        "[[Enumerable]]"?: boolean | undefined;
    }

    interface AccessorDescriptor<T = unknown> extends GenericDescriptor {
        "[[Get]]"?(): T;
        "[[Set]]"?(value: T): void;
    }

    interface DataDescriptor<T = unknown> extends GenericDescriptor {
        "[[Writable]]"?: boolean | undefined;
        "[[Value]]"?: T | undefined;
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
    readonly ES2020: ES2020;
    readonly ES2021: ES2021;
    readonly ES2022: ES2022;
    readonly ES2023: ES2023;
    readonly ES2024: ES2024;
    readonly ES2025: ES2025;
}

declare const ESAbstract: ESAbstract;
export = ESAbstract;
