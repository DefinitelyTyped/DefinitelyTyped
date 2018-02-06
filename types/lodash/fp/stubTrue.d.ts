import _ = require("../index");

declare namespace Lodash {
    /**
     * This method returns `true`.
     *
     * @returns Returns `true`.
     */
    type StubTrue = () => boolean;
}

declare const stubTrue: Lodash.StubTrue;
export = stubTrue;
