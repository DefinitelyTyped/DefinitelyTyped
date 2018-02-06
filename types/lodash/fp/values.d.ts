import _ = require("../index");

declare namespace Lodash {
    interface Values {
        (): Values;
        <T>(object: _.Dictionary<T>|_.NumericDictionary<T>|_.List<T> | null | undefined): T[];
        <T extends object>(object: T | null | undefined): Array<T[keyof T]>;
        (object: any): any[];
    }
}

declare const values: Lodash.Values;
export = values;
