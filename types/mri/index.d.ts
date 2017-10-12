// Type definitions for mri 1.1
// Project: https://github.com/lukeed/mri
// Definitions by: Brendan Forster <https://github.com/shiftkey>, Jed Fox <https://github.com/j-f1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = mri;

declare function mri(args: ReadonlyArray<string>, options?: mri.Options): mri.Argv;

declare namespace mri {
    const prototype: {
    };

    /** A string or array of strings */
    type ArrayOrString = string | ReadonlyArray<string>;

    /** An object with any keys whose values conform to a specific type */
    interface DictionaryObject<T = any> {
        [key: string]: T;
    }

    interface Options {
        /** Additional aliases for specific flags */
        alias?: DictionaryObject<ArrayOrString>;
        /** A flag or array of flags whose values are boolean */
        boolean?: ArrayOrString;
        /** Default values for flags */
        default?: DictionaryObject;
        string?: ArrayOrString;
        unknown?: (flag: string) => void;
    }

    interface Argv extends DictionaryObject {
        /** anything after `--` or between options */
        _: ReadonlyArray<string>;
    }
}
