import _ = require("../index");

declare namespace Lodash {
    interface ToPlainObject {
        (): ToPlainObject;
        (value: any): any;
    }
}

declare const toPlainObject: Lodash.ToPlainObject;
export = toPlainObject;
