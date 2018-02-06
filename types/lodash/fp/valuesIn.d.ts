import _ = require("../index");

declare namespace Lodash {
    interface ValuesIn {
        (): ValuesIn;
        <T>(object: _.Dictionary<T>|_.NumericDictionary<T>|_.List<T> | null | undefined): T[];
        <T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }
}

declare const valuesIn: Lodash.ValuesIn;
export = valuesIn;
