import _ = require("../index");

declare namespace Lodash {
    type StubString = /**
     * This method returns an empty string.
     *
     * @returns Returns the empty string.
     */
    () => string;;
}

declare const stubString: Lodash.StubString;
export = stubString;
