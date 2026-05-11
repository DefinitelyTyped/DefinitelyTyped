export = FTP;

declare namespace FTP {
    interface FTPOptions {
        host: string;
        port?: number | undefined;
        protocol?: string | undefined;
        username?: string | undefined;
        password?: string | undefined;
        bareCredentials?: string | undefined;
        escape?: boolean | undefined;
        retries?: number | undefined;
        timeout?: number | undefined;
        retryInterval?: number | undefined;
        retryIntervalMultiplier?: number | undefined;
        requiresPassword?: boolean | undefined;
        autoConfirm?: boolean | undefined;
        cwd?: string | undefined;
        additionalLftpCommands?: string | undefined;
        requireSSHKey?: boolean | undefined;
        sshKeyPath?: string | undefined;
        sshKeyOptions?: string | undefined;
    }

    interface MirrorOptions {
        remoteDir?: string | undefined;
        localDir?: string | undefined;
        options?: string | undefined;
        upload?: boolean | undefined;
        parallel?: boolean | number | undefined;
        filter?: any;
    }

    interface FTPResults {
        data: string | null;
        error: Error | null;
    }

    type FTPCallbackFunction = (err: Error | null, results: FTPResults) => any;
}

declare class FTP {
    constructor(options: FTP.FTPOptions);

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
