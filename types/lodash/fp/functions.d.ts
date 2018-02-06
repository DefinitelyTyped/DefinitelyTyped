import _ = require("../index");

declare namespace Lodash {
    interface Functions {
        (): Functions;
        (object: any): string[];
    }
}

declare const functions: Lodash.Functions;
export = functions;
