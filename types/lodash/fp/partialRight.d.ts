import _ = require("../index");

declare namespace Lodash {
    interface PartialRight {
        (): PartialRight;
        <TValue>(func: Function0<R>): Function0<R>;
    }
}

declare const partialRight: Lodash.PartialRight;
export = partialRight;
