import _ = require("../index");

declare namespace Lodash {
    interface Shuffle {
        (): Shuffle;
        <T>(collection: _.List<T> | null | undefined): T[];
        <T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }
}

declare const shuffle: Lodash.Shuffle;
export = shuffle;
