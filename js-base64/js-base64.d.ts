// Type definitions for js-base64 v2.1.9
// Project: https://github.com/dankogai/js-base64
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
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

interface Base64 {
    /**
     * .encode
     * @param {String} string
     * @return {String}
     */
    encode(base64: string): string;

    /**
     * .encodeURI
     * @param {String} string
     * @return {String}
     */
    encodeURI(base64: string): string

    /**
     * .decode
     * @param {String} string
     * @return {String}
     */
    decode(base64: string): string

    /**
     * Library version
     */
    VERSION:string
}

declare module 'js-base64' {
    const Base64: Base64
}