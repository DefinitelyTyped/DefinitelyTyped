// Type definitions for owasp-password-strength-test 1.3
// Project: https://github.com/nowsecure/owasp-password-strength-test
// Definitions by: Stephan Troyer <https://github.com/stephtr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace owaspPasswordStrengthTest;

export interface TestResult {
    /** error messages associated with the failed tests */
    errors: string[];
    /** enumerates which tests have failed, beginning from 0 with the first required test */
    failedTests: number[];
    /** enumerates which tests have succeeded, beginning from 0 with the first required test */
    passedTests: number[];
    /** error messages of required tests that have failed */
    requiredTestErrors: string[];
    /** error messages of optional tests that have failed */
    optionalTestErrors: string[];
    /** indicates whether or not the password was considered to be a passphrase */
    isPassphrase: boolean;
    /** indicates whether or not the user's password satisfied the strength requirements */
    strong: boolean;
    /**
     * indicates how many of the optional tests were passed;
     * In order for the password to be considered "strong", it (by default) must either be a passphrase,
     * or must pass a number of optional tests that is equal to or greater than configs.minOptionalTestsToPass
     */
    optionalTestsPassed: number;
}
export interface TestConfig {
    /**
     * toggles the "passphrase" mechanism on and off;
     * If set to false, the strength-checker will abandon the notion of "passphrases",
     * and will subject all passwords to the same complexity requirements.
     */
    allowPassphrases: boolean;
    /** constraint on a password's maximum length */
    maxLength: number;
    /** constraint on a password's minimum length */
    minLength: number;
    /**
     * minimum length a password needs to achieve in order to be considered a "passphrase"
     * (and thus exempted from the optional complexity tests by default)
     */
    minPhraseLength: number;
    /**
     * minimum number of optional tests that a password must pass in order to be considered "strong";
     * By default (per the OWASP guidelines), four optional complexity tests are made,
     * and a password must pass at least three of them in order to be considered "strong"
     */
    minOptionalTestsToPass: number;

    // // to add support for https://github.com/nowsecure/owasp-password-strength-test/pull/5
    // /**
    //  * toggles the i18n error keys in place of english error messages.
    //  * This can be useful when translating the errors using a 3rd party i18n library.
    //  * When true the following keys can be returned:
    //  * `failedMinLength`, `failedMaxLength`, `failedThreeRepeatedChars`, `optionalLowercaseRequired`, `optionalUppercaseRequired`, `optionalNumberRequired` and `optionalSpecialCharRequired`.
    //  */
    // i18nErrorKeys?: boolean;
}

export type PasswordTest = (password: string) => string | undefined;

export function test(password: string): TestResult;
export function config(configuration: Partial<TestConfig>): void;

export let tests: {
    required: PasswordTest[];
    optional: PasswordTest[];
};
export const configs: Readonly<TestConfig>;
