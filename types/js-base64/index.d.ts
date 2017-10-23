// Type definitions for js-base64 2.3
// Project: https://github.com/dankogai/js-base64
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>, Tommy Lent <https://github.com/tlent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
## TODO

add methods:
- [x] encode
- [x] encodeURI
- [x] decode
- [ ] atob
- [ ] btoa
- [ ] fromBase64
- [ ] toBase64
- [ ] utob
- [ ] btou
- [ ] noConflict
 */

export as namespace Base64;

export namespace Base64 {
    const VERSION: string;

    function encode(s: string): string;

    function encodeURI(s: string): string;

    function decode(base64: string): string;
}
