/// <reference types="node" />

import { ClientChannel, ExecOptions as ssh2ExecOptions, SFTPWrapper } from "ssh2";
import { TransferOptions } from "ssh2-streams";

declare namespace SSH {
    type Shell = ClientChannel;
    type SFTP = SFTPWrapper;

    interface ConfigGiven {
        host: string;
        port?: number | undefined;
        username: string;
        password?: string | undefined;
        privateKey?: string | undefined;
        onKeyboardInteractive?: (() => void | boolean) | undefined;
    }

    interface ExecOptions {
        cwd?: string | undefined;
        stdin?: string | undefined;
        options?: ssh2ExecOptions | undefined;
        onStdout?: ((chunk: Buffer) => void) | undefined;
        onStderr?: ((chunk: Buffer) => void) | undefined;
    }

    interface ExecResult {
        stdout: string;
        stderr: string;
        code: number;
        signal?: string | undefined;
    }

    interface PutFilesOptions {
        sftp?: SFTP | undefined;
        sftpOptions?: TransferOptions | undefined;
        concurrency?: number | undefined;
    }

    interface PutDirectoryOptions {
        sftp?: SFTP | undefined;
        sftpOptions?: TransferOptions | undefined;
        concurrency?: number | undefined;
        recursive?: boolean | undefined;
        tick?: ((localPath: string, remotePath: string, error: Error | null | undefined) => void) | undefined;
        validate?: ((localPath: string) => boolean) | undefined;
    }
}

declare class SSH {
    constructor();

    connect(givenConfig: SSH.ConfigGiven): Promise<this>;

    requestShell(): Promise<SSH.Shell>;

    requestSFTP(): Promise<SSH.SFTP>;

    mkdir(path: string, type: "exec"): Promise<void>;

    mkdir(path: string, type?: "sftp", givenSftp?: SSH.SFTP): Promise<void>;

    exec(
        command: string,
        parameters?: ReadonlyArray<string>,
        options?: SSH.ExecOptions & { stream?: "stdout" | "stderr" | undefined },
    ): Promise<string>;

    exec(
        command: string,
        parameters?: ReadonlyArray<string>,
        options?: SSH.ExecOptions & { stream: "both" },
    ): Promise<SSH.ExecResult>;

    execCommand(givenCommand: string, options?: SSH.ExecOptions): Promise<SSH.ExecResult>;

    getFile(localFile: string, remoteFile: string, givenSftp?: SSH.SFTP, givenOpts?: TransferOptions): Promise<void>;

    putFile(localFile: string, remoteFile: string, givenSftp?: SSH.SFTP, givenOpts?: TransferOptions): Promise<void>;

    putFiles(files: ReadonlyArray<{ local: string; remote: string }>, givenConfig?: SSH.PutFilesOptions): Promise<void>;

    putDirectory(
        localDirectory: string,
        remoteDirectory: string,
        givenConfig?: SSH.PutDirectoryOptions,
    ): Promise<boolean>;

    dispose(): void;
}

export = SSH;
