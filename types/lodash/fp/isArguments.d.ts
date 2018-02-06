import _ = require("../index");

declare namespace Lodash {
    interface IsArguments {
        (): IsArguments;
        (value: any): value is IArguments;
    }
}

declare const isArguments: Lodash.IsArguments;
export = isArguments;
