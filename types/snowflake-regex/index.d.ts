interface GenerateOptions {
    exact?: boolean;
    global?: boolean;
    multiline?: boolean;
}

declare const _exports: RegExp & { generate(options?: GenerateOptions): RegExp };
export = _exports;
