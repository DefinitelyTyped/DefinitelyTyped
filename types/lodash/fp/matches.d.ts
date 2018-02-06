import _ = require("../index");

declare namespace Lodash {
    interface Matches {
        (): Matches;
        <T>(source: T): (value: any) => boolean;
        <T, V>(source: T): (value: V) => boolean;
    }
}

declare const matches: Lodash.Matches;
export = matches;
