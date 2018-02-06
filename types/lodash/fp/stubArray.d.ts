import _ = require("../index");

declare namespace Lodash {
    /**
     * This method returns a new empty array.
     *
     * @returns Returns the new empty array.
     */
    type StubArray = () => any[];
}

declare const stubArray: Lodash.StubArray;
export = stubArray;
