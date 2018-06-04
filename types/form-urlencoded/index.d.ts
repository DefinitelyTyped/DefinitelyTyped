// Type definitions for form-urlencoded 2.0
// Project: https://github.com/iambumblehead/form-urlencoded#readme
// Definitions by: Antoine Lépée <https://github.com/alepee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface FormEncodedOptions {
    sorted?: boolean;
    skipIndex?: boolean;
    ignorenull?: boolean;
}

export default function(data: any, opts?: FormEncodedOptions): string;
