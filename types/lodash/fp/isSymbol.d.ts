import _ = require("../index");

declare namespace Lodash {
    interface IsSymbol {
        (): IsSymbol;
        (value: any): boolean;
    }
}

declare const isSymbol: Lodash.IsSymbol;
export = isSymbol;
