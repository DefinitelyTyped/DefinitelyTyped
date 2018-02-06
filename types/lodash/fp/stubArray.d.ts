import _ = require("../index");

declare namespace Lodash {
    type StubArray = /**
     * This method returns a new empty array.
     *
     * @returns Returns the new empty array.
     */
    () => any[];;
}

declare const stubArray: Lodash.StubArray;
export = stubArray;
