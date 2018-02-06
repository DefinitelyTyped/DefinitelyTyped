import _ = require("../index");

declare namespace Lodash {
    interface Property {
        (): Property;
        <TObj, TResult>(path: _.PropertyPath): (obj: TObj) => TResult;
    }
}

declare const property: Lodash.Property;
export = property;
