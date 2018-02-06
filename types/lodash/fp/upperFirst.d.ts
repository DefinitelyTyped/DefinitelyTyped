import _ = require("../index");

declare namespace Lodash {
    interface UpperFirst {
        (): UpperFirst;
        (string: string): string;
    }
}

declare const upperFirst: Lodash.UpperFirst;
export = upperFirst;
