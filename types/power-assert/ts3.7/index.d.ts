// Type definitions for power-assert 1.5.1
// Project: https://github.com/twada/power-assert
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// copy from assert external module in node.d.ts

import * as module from "../index";

export = assert;
export as namespace assert;

declare function assert(value: any, message?: string): asserts value;
declare namespace assert {
    export import AssertionError = module.AssertionError;

    export import fail = module.fail;
    export import ok = module.ok;
    export import equal = module.equal;
    export import notEqual = module.notEqual;
    export import deepEqual = module.deepEqual;
    export import notDeepEqual = module.notDeepEqual;
    export import strictEqual = module.strictEqual;
    export import notStrictEqual = module.notStrictEqual;
    export import deepStrictEqual = module.deepStrictEqual;
    export import notDeepStrictEqual = module.notDeepStrictEqual;
    export import throws = module.throws;
    export import doesNotThrow = module.doesNotThrow;
    export import ifError = module.ifError;

    export import strict = assert;

    export import Options = module.Options;

    export import customize = module.customize;
}
