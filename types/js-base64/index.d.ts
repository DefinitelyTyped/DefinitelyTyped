// Type definitions for js-base64 2.3
// Project: https://github.com/dankogai/js-base64
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>, Tommy Lent <https://github.com/tlent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Base64;

export namespace Base64 {
    const VERSION: string;

    function encode(s: string): string;

    function encodeURI(s: string): string;

    function decode(base64: string): string;

    function atob(base64: string): string;

    function btoa(s: string): string;

    function fromBase64(base64: string): string;

    function toBase64(s: string): string;

    function btou(s: string): string;

    function utob(s: string): string;

    function noConflict(): typeof Base64;
}
