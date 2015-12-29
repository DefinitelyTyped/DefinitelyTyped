// Type definitions for strip-json-comments
// Project: https://github.com/sindresorhus/strip-json-comments
// Definitions by: Dylan R. E. Moonfire <https://github.com/dmoonfire/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "strip-json-comments" {
    interface StripJsonOptions {
        whitespace?: boolean;
    }

    function stripJsonComments(input: string, opts?: StripJsonOptions): string;
    export = stripJsonComments;
}
