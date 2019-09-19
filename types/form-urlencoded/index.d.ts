// Type definitions for form-urlencoded 2.0
// Project: https://github.com/iambumblehead/form-urlencoded#readme
// Definitions by: Antoine Lépée <https://github.com/alepee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace formUrlEncoded {
    interface FormEncodedOptions {
        sorted?: boolean;
        skipIndex?: boolean;
        ignorenull?: boolean;
    }
}

declare function formUrlEncoded(data: any, opts?: formUrlEncoded.FormEncodedOptions): string;
export = formUrlEncoded;
