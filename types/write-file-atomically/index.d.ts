import writeFileAtomic = require("write-file-atomic");

export = WriteFileAtomically;

declare function WriteFileAtomically(
    path: string,
    data: WriteFileAtomically.Data,
    options?: writeFileAtomic.Options,
): Promise<void>;

declare namespace WriteFileAtomically {
    type Data = string | Buffer | Uint8Array;
}
