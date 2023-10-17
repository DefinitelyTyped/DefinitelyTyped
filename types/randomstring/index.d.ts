declare namespace Randomstring {
    type Charset =
        | "alphanumeric"
        | "alphabetic"
        | "numeric"
        | "hex"
        | "binary"
        | "octal"
        | string;
    type Capitalization = "lowercase" | "uppercase";
    interface GenerateOptions {
        length?: number | undefined;
        readable?: boolean | undefined;
        charset?: Charset | undefined;
        capitalization?: Capitalization | undefined;
    }

    function generate(options?: GenerateOptions | number): string;
}

declare module "randomstring" {
    export = Randomstring;
}
