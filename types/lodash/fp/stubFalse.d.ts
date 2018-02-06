import _ = require("../index");

declare namespace Lodash {
    /**
     * This method returns `false`.
     *
     * @returns Returns `false`.
     */
    type StubFalse = () => boolean;
}

declare const stubFalse: Lodash.StubFalse;
export = stubFalse;
