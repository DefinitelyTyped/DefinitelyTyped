import _ = require("../index");

declare namespace Lodash {
    interface ToPath {
        (): ToPath;
        (value: any): string[];
    }
}

declare const toPath: Lodash.ToPath;
export = toPath;
