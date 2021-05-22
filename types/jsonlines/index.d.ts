// Type definitions for jsonlines 0.1
// Project: https://github.com/LinusU/node-jsonlines#readme
// Definitions by: Raine Revere <https://github.com/raineorshine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';

export interface Line {
    data: string;
    type: string;
}

export interface Options {
    emitInvalidLines?: boolean;
}

export type Parser = Transform & {
  on: (event: string, cb: (data: Line) => void) => Parser;
};

export function parse(options?: Options): Parser;
export function stringify(): Parser;
