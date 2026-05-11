interface Options {
    digits?: boolean;
    lowerCaseAlphabets?: boolean;
    upperCaseAlphabets?: boolean;
    specialChars?: boolean;
}

declare const _default: {
    generate: (length?: number, options?: Options) => string;
};
export = _default;
