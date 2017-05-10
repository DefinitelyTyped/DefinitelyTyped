// Type definitions for typedarray-to-buffer 3.1.2
// Project: https://github.com/feross/typedarray-to-buffer
// Definitions by: Eric Brody <https://github.com/underscorebrody>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "typedarray-to-buffer" {
    export function typedarrayToBuffer(arr: any): Buffer
}
