// Type definitions for sane-email-validation 1.1
// Project: https://github.com/scottgonzalez/sane-email-validation
// Definitions by: Forbes Lindesay <https://github.com/ForbesLindesay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isEmail(email: string): boolean;

declare namespace isEmail {
    function isNotEmail(email: string): boolean;
}

export = isEmail;
