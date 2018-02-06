import _ = require("../index");

declare namespace Lodash {
    interface Constant {
        (): Constant;
        <T>(value: T): () => T;
    }
}

declare const constant: Lodash.Constant;
export = constant;
