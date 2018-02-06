import _ = require("../index");

declare namespace Lodash {
    interface IsElement {
        (): IsElement;
        (value: any): boolean;
    }
}

declare const isElement: Lodash.IsElement;
export = isElement;
