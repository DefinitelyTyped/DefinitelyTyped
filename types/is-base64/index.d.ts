// Type definitions for is-base64 1.1
// Project: https://github.com/miguelmota/is-base64
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IsBase64Options {
    allowEmpty?: boolean;
    allowMime?: boolean;
    mimeRequired?: boolean;
    paddingRequired?: boolean;
}

declare function isBase64(string: string, options?: IsBase64Options): boolean;

export = isBase64;
