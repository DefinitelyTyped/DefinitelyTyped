// Type definitions for domready
// Project: https://github.com/ded/domready
// Definitions by: Christian Holm Nielsen
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function domready(callback: () => any) : void;

declare module "domready" {
    export = domready;
}
