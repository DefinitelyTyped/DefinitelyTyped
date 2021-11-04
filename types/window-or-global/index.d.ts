// Type definitions for window-or-global 1.0
// Project: https://github.com/purposeindustries/window-or-global
// Definitions by: vvakame <https://github.com/vvakame>
//                 Jason Kwok <https://github.com/JasonHK>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare const _: typeof globalThis & (typeof self | typeof global);
export = _;
