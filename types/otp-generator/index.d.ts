// Type definitions for otp-generator 4.0
// Project: https://github.com/Maheshkumar-Kakade/otp-generator
// Definitions by: Md Sifatul Islam Rabbi <https://github.com/sifatulrabbi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
