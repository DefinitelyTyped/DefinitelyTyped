// Type definitions for fast-redact 2.0
// Project: https://github.com/davidmarkclements/fast-redact#readme
// Definitions by: asciidisco <https://github.com/asciidisco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

export = F;

/**
 * When called without any options, or with a zero length paths array, fast-redact will return JSON.stringify or the serialize option, if set.
 * @param redactOptions
 * @param redactOptions.paths An array of strings describing the nested location of a key in an object.
 * @param redactOptions.censor This is the value which overwrites redacted properties.
 * @param redactOptions.remove The remove option, when set to true will cause keys to be removed from the serialized output.
 * @param redactOptions.serialize The serialize option may either be a function or a boolean. If a function is supplied, this will be used to serialize the redacted object.
 * @param redactOptions.strict The strict option, when set to true, will cause the redactor function to throw if instead of an object it finds a primitive.
 * @returns Redacted value from input
 */
declare function F(redactOptions: F.RedactOptions): F.redactFn;

declare namespace F {
    /** Redacts input */
    type redactFn = <T = any>(input: T) => T;

    interface RedactOptions {
        /** An array of strings describing the nested location of a key in an object. */
        paths: string[];
        /** This is the value which overwrites redacted properties. */
        censor?: string | ((v: any) => any);
        /** The remove option, when set to true will cause keys to be removed from the serialized output. */
        remove?: boolean;
        /** The serialize option may either be a function or a boolean. If a function is supplied, this will be used to serialize the redacted object. */
        serialize?: boolean | ((v: any) => any);
        /** The strict option, when set to true, will cause the redactor function to throw if instead of an object it finds a primitive. */
        strict?: boolean;
    }
}
