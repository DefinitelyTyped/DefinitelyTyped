import _ = require("../index");

declare namespace Lodash {
    interface PropertyOf {
        (): PropertyOf;
        <T extends {}>(object: T): (path: _.PropertyPath) => any;
    }
}

declare const propertyOf: Lodash.PropertyOf;
export = propertyOf;
