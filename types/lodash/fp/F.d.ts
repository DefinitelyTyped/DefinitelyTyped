import _ = require("../index");

declare namespace Lodash {
    type StubFalse = /**
     * This method returns `false`.
     *
     * @returns Returns `false`.
     */
    () => boolean;;
}

declare const F: Lodash.StubFalse;
export = F;
