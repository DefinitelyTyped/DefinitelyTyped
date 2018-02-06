import _ = require("../index");

declare namespace Lodash {
    interface Chain {
        (): Chain;
        <T>(value: T): _.LoDashExplicitWrapper<T>;
    }
}

declare const chain: Lodash.Chain;
export = chain;
