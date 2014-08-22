// Type definitions for domready
// Project: https://github.com/ded/domready
// Definitions by: Christian Holm Nielsen <https://github.com/dotnetnerd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function domready(callback: () => any) : void;

declare module "domready" {
    export = domready;
}
