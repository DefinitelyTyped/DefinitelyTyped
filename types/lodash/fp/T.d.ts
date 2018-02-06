import _ = require("../index");

declare namespace Lodash {
    /**
     * This method returns `true`.
     *
     * @returns Returns `true`.
     */
    type StubTrue = () => boolean;
}

declare const T: Lodash.StubTrue;
export = T;
