// Type definitions for otp-generator 4.0.0
// Project: https://github.com/Maheshkumar-Kakade/otp-generator
// Definitions by: Md Sifatul Islam Rabbi <https://github.com/sifatulrabbi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5.5

declare const _default: {
    /**
     * Generate OTP of the length
     * @param  {number} length length of password.
     * @param  {object} options
     * @param  {boolean} options.digits Default: `true` true value includes digits in OTP
     * @param  {boolean} options.lowerCaseAlphabets Default: `true` true value includes lowercase alphabets in OTP
     * @param  {boolean} options.upperCaseAlphabets Default: `true` true value includes uppercase alphabets in OTP
     * @param  {boolean} options.specialChars Default: `true` true value includes specialChars in OTP
     */
    generate: (
        length: number,
        options: {
            digits?: boolean;
            lowerCaseAlphabets?: boolean;
            upperCaseAlphabets?: boolean;
            specialChars?: boolean;
        },
    ) => string;
};
export = _default;
