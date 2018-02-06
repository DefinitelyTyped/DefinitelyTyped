import _ = require("../index");

declare namespace Lodash {
    /**
     * This method returns a new empty object.
     *
     * @returns Returns the new empty object.
     */
    type StubObject = () => any;
}

declare const stubObject: Lodash.StubObject;
export = stubObject;
