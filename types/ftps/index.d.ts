// Type definitions for ftps 1.1
// Project: https://github.com/Atinux/node-ftps#readme
// Definitions by: Christos Panagiotakopoulos <https://github.com/chrispanag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = FTP;

declare namespace FTP {
    interface FTPOptions {
        host: string;
        port?: number;
        protocol?: string;
        username?: string;
        password?: string;
        escape?: boolean;
        retries?: number;
        timeout?: number;
        retryInterval?: number;
        retryIntervalMultiplier?: number;
        requiresPassword?: boolean;
        autoConfirm?: boolean;
        cwd?: string;
        additionalLftpCommands?: string;
        requireSSHKey?: boolean;
        sshKeyPath?: boolean;
    }

    interface MirrorOptions {
        remoteDir?: string;
        localDir?: string;
        options?: string;
        upload?: boolean;
        parallel?: boolean | number;
        filter?: any;
    }

    interface FTPResults {
        data: string | null;
        error: Error | null;
    }

    type FTPCallbackFunction = (err: Error | null, results: FTPResults) => any;
}

declare class FTP {
    constructor(options: FTP.FTPOptions)

    raw(cmd: string): FTP;
    ls(): FTP;
    pwd(): FTP;
    cd(directory: string): FTP;
    cat(path: string): FTP;
    put(localPath: string, remotePath: string): FTP;
    addFile(localPath: string, remotePath: string): FTP;
    get(remotePath: string, localPath: string): FTP;
    getFile(remotePath: string, localPath: string): FTP;
    mv(from: string, to: string): FTP;
    move(from: string, to: string): FTP;
    rm(...paths: string[]): FTP;
    remove(...paths: string[]): FTP;
    rmdir(...paths: string[]): FTP;
    mirror(options: FTP.MirrorOptions): FTP;

    exec(cmdsOrCallback: string | string[] | FTP.FTPCallbackFunction, callback?: FTP.FTPCallbackFunction): any;
    execAsStream(cmds: string | string[]): any;
    // Helpers
    escapeshell(cmd: string): string;
}
