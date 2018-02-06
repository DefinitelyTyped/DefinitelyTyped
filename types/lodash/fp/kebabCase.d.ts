import _ = require("../index");

declare namespace Lodash {
    interface KebabCase {
        (): KebabCase;
        (string: string): string;
    }
}

declare const kebabCase: Lodash.KebabCase;
export = kebabCase;
