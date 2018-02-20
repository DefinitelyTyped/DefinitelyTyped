// Type definitions for csv2json 1.4
// Project: https://github.com/julien-f/csv2json
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Writable } from "stream";

export interface CSV2JSONOptions {
  dynamicTyping?: boolean;
  separator?: string;
}

export default function csv2json(options: CSV2JSONOptions): Writable;
