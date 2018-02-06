import _ = require("../index");

declare namespace Lodash {
    type StubTrue = /**
     * This method returns `true`.
     *
     * @returns Returns `true`.
     */
    () => boolean;;
}

declare const T: Lodash.StubTrue;
export = T;
