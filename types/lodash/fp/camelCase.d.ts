import _ = require("../index");

declare namespace Lodash {
    interface CamelCase {
        (): CamelCase;
        (string: string): string;
    }
}

declare const camelCase: Lodash.CamelCase;
export = camelCase;
