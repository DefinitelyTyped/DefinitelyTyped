import _ = require("../index");

declare namespace Lodash {
    type StubObject = /**
     * This method returns a new empty object.
     *
     * @returns Returns the new empty object.
     */
    () => any;;
}

declare const stubObject: Lodash.StubObject;
export = stubObject;
