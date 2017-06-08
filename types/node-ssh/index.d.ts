// Type definitions for node-ssh 4.2.2
// Project: https://github.com/steelbrain/node-ssh
// Definitions by: Homa Wong (unional) <https://github.com/unional>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import SSH2 = require('ssh2');

declare class SSH {
  connection?: SSH2.Client | null;
  connect(givenConfig: SSH.ConfigGiven): Promise<this>;
  requestShell(): Promise<Object>;
  requestSFTP(): Promise<Object>;
  mkdir(path: string, type: 'exec' | 'sftp', givenSftp?: Object | null): Promise<void>;
  exec(command: string, parameters: string[], options: { cwd?: string, stdin?: string, stream?: string, options?: Object });
  execCommand(givenCommand: string, options: { cwd?: string, stdin?: string, options?: Object }): Promise<{ stdout: string, stderr: string, code: number, signal?: string | null }>;
  getFile(localFile: string, remoteFile: string, givenSftp?: Object | null, givenOpts?: Object | null): Promise<void>;
  putFile(localFile: string, remoteFile: string, givenSftp?: Object | null, givenOpts?: Object | null): Promise<void>;
  putFiles(files: Array<{ local: string, remote: string }>, givenSftp?: Object | null, maxAtOnce?: number, givenOpts?: Object | null): Promise<void>;
  putDirectory(localDirectory: string, remoteDirectory: string, givenConfig?: Object, givenSftp?: Object | null, givenOpts?: Object | null): Promise<boolean>;
  dispose(): void;
}

declare namespace SSH {
  interface Config {
    host: string;
    port: number;
    username: string;
    password?: string | null;
    privateKey?: string | null;
  }
  interface ConfigGiven {
    host: string;
    port?: number;
    username: string;
    password?: string;
    privateKey?: string;
  }
  interface ConfigDirectoryTransfer {
    recursive: boolean;
    tick: (localPath: string, remotePath: string, error?: Error | null) => void;
    validate: (localPath: string) => boolean;
  }
  interface ConfigDirectoryTransferGiven {
    recursive?: boolean;
    tick?: (localPath: string, remotePath: string, error?: Error | null) => void;
    validate?: (localPath: string) => boolean;
  }
}

export = SSH;
