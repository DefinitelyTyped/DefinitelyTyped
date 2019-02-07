// Type definitions for ssh2-sftp-client 2.4
// Project: https://www.npmjs.com/package/ssh2-sftp-client
// Definitions by: igrayson <https://github.com/igrayson>
//                 Ascari Andrea <https://github.com/ascariandrea>
//                 Kartik Malik <https://github.com/kartik2406>
//                 Michael Pertl <https://github.com/viamuli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ssh2 from 'ssh2';
import * as ssh2Stream from 'ssh2-streams';

export = sftp;

declare class sftp {
    connect(options: ssh2.ConnectConfig): Promise<void>;

    list(remoteFilePath: string): Promise<sftp.FileInfo[]>;

    exists(remotePath: string): Promise<string>;

    stat(remotePath: string): Promise<sftp.FileStats>;

    get(remoteFilePath: string, useCompression?: boolean, encoding?: string | null): Promise<NodeJS.ReadableStream>;

    fastGet(remoteFilePath: string, localPath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

    put(input: string | Buffer | NodeJS.ReadableStream, remoteFilePath: string, useCompression?: boolean, encoding?: string): Promise<void>;

    fastPut(localPath: string, emoteFilePath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

    mkdir(remoteFilePath: string, recursive?: boolean): Promise<void>;

    rmdir(remoteFilePath: string, recursive?: boolean): Promise<void>;

    delete(remoteFilePath: string): Promise<void>;

    rename(remoteSourcePath: string, remoteDestPath: string): Promise<void>;

    chmod(remotePath: string, mode: number | string): Promise<string>;

    end(): Promise<void>;

    on(event: string, callback: (...args: any[]) => void): void;
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
        permissions?: any;
        owner: number;
        group: number;
        size: number;
        accessTime: number;
        modifyTime: number;
    }
}
