// Type definitions for nanp v0.3.0
// Project: https://github.com/weisjohn/nanp
// Definitions by: Karn Saheb <https://github.com/karn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Nanp {

    /**
     * Test if a string is a North American Number Plan (phone) number.
     * 
     * @param {string} phoneNumber The phone number being tested.
     * @returns {boolean} True if the given phoneNumber is a NANP number.
     */
    (string: string): boolean;

    /**
     * Removes all parenthesis, dashes, dots, spaces.
     * Removes leading `1` or `+1` only on strings longer than 10 digits 
     * 
     * @param {string} phoneNumber The phone number that is being stripped.
     * @returns {string}
     */
    strip(phoneNumber: string): string;
}

declare var nanp: Nanp;

declare module "nanp" {
    export = nanp;
}
