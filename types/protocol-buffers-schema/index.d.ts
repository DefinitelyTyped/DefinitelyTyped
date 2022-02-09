// Type definitions for protocol-buffers-schema 3.4
// Project: https://github.com/mafintosh/protocol-buffers-schema
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

import { Schema } from "./types";
declare namespace parse {
    function parse(buffer: string | Buffer): Schema;
    function stringify(schema: Schema): string;
}

declare function parse(buffer: string | Buffer): Schema;

export = parse;
