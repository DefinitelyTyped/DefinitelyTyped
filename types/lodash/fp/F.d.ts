import _ = require("../index");

declare namespace Lodash {
    /**
     * This method returns `false`.
     *
     * @returns Returns `false`.
     */
    type StubFalse = () => boolean;
}

declare const F: Lodash.StubFalse;
export = F;
