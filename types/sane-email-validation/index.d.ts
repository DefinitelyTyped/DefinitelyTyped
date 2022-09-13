// Type definitions for sane-email-validation 3.0
// Project: https://github.com/scottgonzalez/sane-email-validation
// Definitions by: Forbes Lindesay <https://github.com/ForbesLindesay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Sane Email Validation
 */
declare function isEmail(email: string): boolean;

declare namespace isEmail {
    /**
     * An inverted check is also exposed.
     */
    function isNotEmail(email: string): boolean;
    /**
     * An ASCII only version of the validator.
     */
    function isAsciiEmail(email: string): boolean;
    /**
     * An inverted check is also exposed for the ASCII only version.
     */
    function isNotAsciiEmail(email: string): boolean;
}

export = isEmail;
