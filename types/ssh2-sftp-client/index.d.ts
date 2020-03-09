// Type definitions for ssh2-sftp-client 4.1
// Project: https://github.com/theophilusx/ssh2-sftp-client
// Definitions by: igrayson <https://github.com/igrayson>
//                 Ascari Andrea <https://github.com/ascariandrea>
//                 Kartik Malik <https://github.com/kartik2406>
//                 Michael Pertl <https://github.com/viamuli>
//                 Orblazer <https://github.com/orblazer>
//                 Taylor Herron <https://github.com/gbhmt>
//                 Lane Goldberg <https://github.com/builtbylane>
//                 Lorenzo Adinolfi <https://github.com/loru88>
//                 Sam Galizia <https://github.com/sgalizia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ssh2 from 'ssh2';
import * as ssh2Stream from 'ssh2-streams';

export = sftp;

declare class sftp {
    connect(options: ssh2.ConnectConfig): Promise<ssh2.SFTPWrapper>;

    list(remoteFilePath: string, pattern?: string | RegExp): Promise<sftp.FileInfo[]>;

    exists(remotePath: string): Promise<false | 'd' | '-' | 'l'>;

    stat(remotePath: string): Promise<sftp.FileStats>;

    realPath(remotePath: string): Promise<string>;

    get(
        path: string,
        dst?: string | NodeJS.WritableStream,
        options?: ssh2Stream.TransferOptions,
    ): Promise<string | NodeJS.WritableStream | Buffer>;

    fastGet(remoteFilePath: string, localPath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

    put(
        input: string | Buffer | NodeJS.ReadableStream,
        remoteFilePath: string,
        options?: ssh2Stream.TransferOptions,
    ): Promise<string>;

    fastPut(localPath: string, remoteFilePath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

    cwd(): Promise<string>;

    mkdir(remoteFilePath: string, recursive?: boolean): Promise<string>;

    rmdir(remoteFilePath: string, recursive?: boolean): Promise<string>;

    delete(remoteFilePath: string): Promise<string>;

    rename(remoteSourcePath: string, remoteDestPath: string): Promise<string>;

    chmod(remotePath: string, mode: number | string): Promise<string>;

    append(
        input: Buffer | NodeJS.ReadableStream,
        remotePath: string,
        options?: ssh2Stream.TransferOptions,
    ): Promise<string>;

    end(): Promise<void>;

    on(event: string, callback: (...args: any[]) => void): void;

    removeListener(event: string, callback: (...args: any[]) => void): void;
}

declare namespace sftp {
    interface FileInfo {
        type: string;
        name: string;
        size: number;
        modifyTime: number;
        accessTime: number;
        rights: {
            user: string;
            group: string;
            other: string;
        };
        owner: number;
        group: number;
    }

    interface FileStats {
        mode: number;
        uid: number;
        gid: number;
        size: number;
        accessTime: number;
        modifyTime: number;
        isDirectory: boolean;
        isFile: boolean;
        isBlockDevice: boolean;
        isCharacterDevice: boolean;
        isSymbolicLink: boolean;
        isFIFO: boolean;
        isSocket: boolean;
    }
}
