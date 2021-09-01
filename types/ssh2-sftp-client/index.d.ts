// Type definitions for ssh2-sftp-client 7.0
// Project: https://github.com/theophilusx/ssh2-sftp-client
// Definitions by: igrayson <https://github.com/igrayson>
//                 Ascari Andrea <https://github.com/ascariandrea>
//                 Kartik Malik <https://github.com/kartik2406>
//                 Michael Pertl <https://github.com/viamuli>
//                 Taylor Herron <https://github.com/gbhmt>
//                 Lane Goldberg <https://github.com/builtbylane>
//                 Lorenzo Adinolfi <https://github.com/loru88>
//                 Sam Galizia <https://github.com/sgalizia>
//                 Tom Xu <https://github.com/hengkx>
//                 Joseph Burger <https://github.com/candyapplecorn>
//                 Emma Milner <https://github.com/tsop14>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ssh2 from 'ssh2';

export = sftp;

type FileInfoType = 'd' | '-' | 'l';

declare class sftp {
    constructor(name?: string);
    connect(options: sftp.ConnectOptions): Promise<ssh2.SFTPWrapper>;

    list(remoteFilePath: string, pattern?: string | RegExp): Promise<sftp.FileInfo[]>;

    exists(remotePath: string): Promise<false | FileInfoType>;

    stat(remotePath: string): Promise<sftp.FileStats>;

    realPath(remotePath: string): Promise<string>;

    get(
        path: string,
        dst?: string | NodeJS.WritableStream,
        options?: sftp.TransferOptions,
    ): Promise<string | NodeJS.WritableStream | Buffer>;

    fastGet(remoteFilePath: string, localPath: string, options?: sftp.FastGetTransferOptions): Promise<string>;

    put(
        input: string | Buffer | NodeJS.ReadableStream,
        remoteFilePath: string,
        options?: sftp.TransferOptions,
    ): Promise<string>;

    fastPut(localPath: string, remoteFilePath: string, options?: sftp.FastPutTransferOptions): Promise<string>;

    cwd(): Promise<string>;

    mkdir(remoteFilePath: string, recursive?: boolean): Promise<string>;

    rmdir(remoteFilePath: string, recursive?: boolean): Promise<string>;

    delete(remoteFilePath: string, noErrorOK?: boolean): Promise<string>;

    rename(remoteSourcePath: string, remoteDestPath: string): Promise<string>;

    chmod(remotePath: string, mode: number | string): Promise<string>;

    append(
        input: Buffer | NodeJS.ReadableStream,
        remotePath: string,
        options?: sftp.WriteStreamOptions,
    ): Promise<string>;

    uploadDir(srcDir: string, destDir: string, filter?: string | RegExp): Promise<string>;

    downloadDir(srcDir: string, destDir: string, filter?: string | RegExp): Promise<string>;

    end(): Promise<void>;

    on(event: string, callback: (...args: any[]) => void): void;

    removeListener(event: string, callback: (...args: any[]) => void): void;

    posixRename(fromPath: string, toPath: string): Promise<string>;
}

declare namespace sftp {
    interface ConnectOptions extends ssh2.ConnectConfig {
        retries?: number;
        retry_factor?: number;
        retry_minTimeout?: number;
    }

    interface ModeOption {
        mode?: number | string;
    }

    interface PipeOptions {
        end?: boolean;
    }

    interface ReadStreamOptions extends ModeOption {
        flags?: 'r';
        encoding?: null | string;
        handle?: null | string;
        autoClose?: boolean;
    }

    interface WriteStreamOptions extends ModeOption {
        flags?: 'w' | 'a';
        encoding?: null | string;
        autoClose?: boolean;
    }

    interface TransferOptions {
        pipeOptions?: PipeOptions;
        writeStreamOptions?: WriteStreamOptions;
        readStreamOptions?: ReadStreamOptions;
    }

    interface FastGetTransferOptions {
        concurrency?: number;
        chunkSize?: number;
        step?: (totalTransferred: number, chunk: number, total: number) => void;
    }

    interface FastPutTransferOptions extends FastGetTransferOptions, ModeOption {}

    interface FileInfo {
        type: FileInfoType;
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
