export = mri;

declare function mri(args: ReadonlyArray<string>, options?: mri.Options): mri.Argv;

declare namespace mri {
    const prototype: {};

    /** A string or array of strings */
    type ArrayOrString = string | ReadonlyArray<string>;

    /** An object with any keys whose values conform to a specific type */
    interface DictionaryObject<T = any> {
        [key: string]: T;
    }

    interface Options {
        /** Additional aliases for specific flags */
        alias?: DictionaryObject<ArrayOrString> | undefined;
        /** A flag or array of flags whose values are boolean */
        boolean?: ArrayOrString | undefined;
        /** Default values for flags */
        default?: DictionaryObject | undefined;
        string?: ArrayOrString | undefined;
        unknown?: ((flag: string) => void) | undefined;
    }

    interface Argv extends DictionaryObject {
        /** anything after `--` or between options */
        _: ReadonlyArray<string>;
    }
}
