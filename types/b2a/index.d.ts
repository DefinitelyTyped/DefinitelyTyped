// Type definitions for b2a 1.0
// Project: https://github.com/kaelzhang/b2a#readme
// Definitions by: PatPL <https://github.com/PatPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Converts base64 string back into original text
 */
declare function atob(base64: string): string;

/**
 * Converts text into base64 string
 */
declare function btoa(text: string): string;

export {
    atob,
    btoa
};
