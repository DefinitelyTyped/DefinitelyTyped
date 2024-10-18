/// <reference types="node" />

export = decrypt;

declare function decrypt(data: string | Buffer, passphrase: string, outEnc?: "buffer"): Buffer;
declare function decrypt(data: string | Buffer, passphrase: string, outEnc: BufferEncoding): string;
