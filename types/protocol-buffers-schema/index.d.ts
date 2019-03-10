// Type definitions for protocol-buffers-schema 3.3
// Project: https://github.com/mafintosh/protocol-buffers-schema
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Schema} from "./types"
declare namespace parse {
    export function parse(buffer: string | Buffer): Schema;
    export function stringify(schema: Schema): string;
}

declare function parse(buffer: string | Buffer): Schema;

export = parse;
