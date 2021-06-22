// Type definitions for uuencode 0.0
// Project: https://github.com/zacbarton/node-uuencode#readme
// Definitions by: synaestheory <https://github.com/synaesthoery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export function decode(str: string | Buffer): string;
export function encode(str: string | Buffer): string;
