// Type definitions for ssh-key-decrypt 0.1
// Project: https://github.com/isaacs/ssh-key-decrypt#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = decrypt;

declare function decrypt(data: string | Buffer, passphrase: string, outEnc?: 'buffer'): Buffer;
declare function decrypt(data: string | Buffer, passphrase: string, outEnc: BufferEncoding): string;
