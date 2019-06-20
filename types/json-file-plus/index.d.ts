// Type definitions for json-file-plus 3.3
// Project: https://github.com/ljharb/json-file-plus
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function readJSON(filename: string): Promise<readJSON.JSONFile>;

declare namespace readJSON {
  function sync(filename: string): JSONFile;

  interface Format {
    readonly indent: number;
    readonly trailing: boolean;
  }

  class JSONData {
    format: Format;
    data: any;
    constructor(raw: string);
    get: (key: string) => Promise<any>;
    set: (data: any) => void;
    remove: (key: string) => Promise<void>;
  }

  class JSONFile extends JSONData {
    filename: string;
    constructor(filename: string, raw: string);
    save: (cb?: (err: Error) => void) => Promise<void>;
    saveSync: () => void;
  }
}

export = readJSON;
