import _ = require("../index");

declare namespace Lodash {
    /**
     * This method returns an empty string.
     *
     * @returns Returns the empty string.
     */
    type StubString = () => string;
}

declare const stubString: Lodash.StubString;
export = stubString;
