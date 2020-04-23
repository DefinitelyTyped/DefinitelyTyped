// Type definitions for node-ssh 7.0
// Project: https://github.com/steelbrain/node-ssh
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ClientChannel, ExecOptions as ssh2ExecOptions, SFTPWrapper } from "ssh2";
import { TransferOptions } from "ssh2-streams";

declare namespace SSH {
    type Shell = ClientChannel;
    type SFTP = SFTPWrapper;

    interface ConfigGiven {
        host: string;
        port?: number;
        username: string;
        password?: string;
        privateKey?: string;
        onKeyboardInteractive?: () => void | boolean;
    }

    interface ExecOptions {
        cwd?: string;
        stdin?: string;
        options?: ssh2ExecOptions;
        onStdout?: (chunk: Buffer) => void;
        onStderr?: (chunk: Buffer) => void;
    }

    interface ExecResult {
        stdout: string;
        stderr: string;
        code: number;
        signal?: string;
    }

    interface PutFilesOptions {
        sftp?: SFTP;
        sftpOptions?: TransferOptions;
        concurrency?: number;
    }

    interface PutDirectoryOptions {
        sftp?: SFTP;
        sftpOptions?: TransferOptions;
        concurrency?: number;
        recursive?: boolean;
        tick?: (localPath: string, remotePath: string, error: Error | null | undefined) => void;
        validate?: (localPath: string) => boolean;
    }
}

declare class SSH {
    constructor();

    connect(givenConfig: SSH.ConfigGiven): Promise<this>;

    requestShell(): Promise<SSH.Shell>;

    requestSFTP(): Promise<SSH.SFTP>;

    mkdir(path: string, type: "exec"): Promise<void>;

    mkdir(path: string, type?: "sftp", givenSftp?: SSH.SFTP): Promise<void>;

    exec(command: string, parameters?: ReadonlyArray<string>,
        options?: SSH.ExecOptions & { stream?: "stdout"|"stderr" }): Promise<string>;

    exec(command: string, parameters?: ReadonlyArray<string>,
        options?: SSH.ExecOptions & { stream: "both" }): Promise<SSH.ExecResult>;

    execCommand(givenCommand: string, options?: SSH.ExecOptions): Promise<SSH.ExecResult>;

    getFile(localFile: string, remoteFile: string, givenSftp?: SSH.SFTP, givenOpts?: TransferOptions): Promise<void>;

    putFile(localFile: string, remoteFile: string, givenSftp?: SSH.SFTP, givenOpts?: TransferOptions): Promise<void>;

    putFiles(files: ReadonlyArray<{ local: string, remote: string }>, givenConfig?: SSH.PutFilesOptions): Promise<void>;

    putDirectory(localDirectory: string, remoteDirectory: string, givenConfig?: SSH.PutDirectoryOptions): Promise<boolean>;

    dispose(): void;
}

export = SSH;
