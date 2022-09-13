// Type definitions for b2a 1.1
// Project: https://github.com/kaelzhang/b2a#readme
// Definitions by: PatPL <https://github.com/PatPL>
//                 Merlinio <https://github.com/Merlinio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Converts base64 string back into original text
 */
declare function atob(base64: string): string;

 /**
  * Converts base64url string back into original text
  */
declare function atobu(base64: string): string;

 /**
  * Converts text into base64 string
  */
declare function btoa(text: string): string;

 /**
  * Converts text into base64url string
  */
declare function btoau(text: string): string;

export {
    atob,
    atobu,
    btoa,
    btoau
};
