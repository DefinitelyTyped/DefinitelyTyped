// Type definitions for json-file-plus 3.3
// Project: https://github.com/ljharb/json-file-plus
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function readJSON(filename: string): Promise<readJSON.JSONFile>;

declare namespace readJSON {
  function sync(filename: string): JSONFile;

  interface Format {
    readonly indent: number | '\t';
    readonly trailing: boolean;
  }

  class JSONData {
    format: Format;
    data: any;
    constructor(raw: string);
    get: (key: PropertyKey) => Promise<any>;
    set: (data: any) => void;
    remove: (key: PropertyKey) => Promise<void>;
    stringify: () => Buffer;
  }

  class JSONFile extends JSONData {
    filename: string;
    constructor(filename: string, raw: string);
    save: (cb?: (err: Error) => void) => Promise<void>;
    saveSync: () => void;
  }
}

export = readJSON;
