// Type definitions for write-file-atomically 2.0
// Project: https://github.com/shinnn/write-file-atomically#readme
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import writeFileAtomic = require("write-file-atomic");

export = WriteFileAtomically;

declare function WriteFileAtomically(path: string, data: WriteFileAtomically.Data, options?: writeFileAtomic.Options): Promise<void>;

declare namespace WriteFileAtomically {
    type Data = string | Buffer | Uint8Array;
}
