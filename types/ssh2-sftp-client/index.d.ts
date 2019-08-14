// Type definitions for ssh2-sftp-client 2.5
// Project: https://github.com/jyu213/ssh2-sftp-client
// Definitions by: igrayson <https://github.com/igrayson>
//                 Ascari Andrea <https://github.com/ascariandrea>
//                 Kartik Malik <https://github.com/kartik2406>
//                 Michael Pertl <https://github.com/viamuli>
//                 Orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ssh2 from 'ssh2';
import * as ssh2Stream from 'ssh2-streams';

export = sftp;

declare class sftp {
    connect(options: ssh2.ConnectConfig): Promise<ssh2.SFTPWrapper>;

    list(remoteFilePath: string): Promise<sftp.FileInfo[]>;

    exists(remotePath: string): Promise<boolean>;

    stat(remotePath: string): Promise<sftp.FileStats>;

    get(path: string, dst?: string | NodeJS.ReadableStream, options?: boolean): Promise<string | NodeJS.ReadableStream | Buffer>;

    fastGet(remoteFilePath: string, localPath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

    put(input: string | Buffer | NodeJS.ReadableStream, remoteFilePath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

    fastPut(localPath: string, remoteFilePath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

    mkdir(remoteFilePath: string, recursive?: boolean): Promise<string>;

    rmdir(remoteFilePath: string, recursive?: boolean): Promise<string>;

    delete(remoteFilePath: string): Promise<string>;

    rename(remoteSourcePath: string, remoteDestPath: string): Promise<string>;

    chmod(remotePath: string, mode: number | string): Promise<string>;

    append(input: Buffer | NodeJS.ReadableStream, remotePath: string, options?: ssh2Stream.TransferOptions): Promise<string>;

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
