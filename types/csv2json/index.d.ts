// Type definitions for csv2json 1.4
// Project: https://github.com/julien-f/csv2json
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Writable } from "stream";

declare namespace csv2json {
  interface Options {
    dynamicTyping?: boolean;
    separator?: string;
  }
}

declare function csv2json(options?: csv2json.Options): Writable;

export = csv2json;
