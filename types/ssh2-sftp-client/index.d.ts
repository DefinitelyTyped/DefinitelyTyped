// Type definitions for ssh2-sftp-client 2.0
// Project: https://www.npmjs.com/package/ssh2-sftp-client
// Definitions by: igrayson <https://github.com/igrayson>, Ascari Andrea <https://github.com/ascariandrea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ssh2 from 'ssh2';

export = sftp;

declare class sftp {
  connect(options: ssh2.ConnectConfig): Promise<void>;
  list(remoteFilePath: string): Promise<sftp.FileInfo[]>;
  get(remoteFilePath: string, useCompression?: boolean, encoding?: string): Promise<NodeJS.ReadableStream>;
  put(input: string | Buffer | NodeJS.ReadableStream, remoteFilePath: string, useCompression?: boolean, encoding?: string): Promise<void>;
  mkdir(remoteFilePath: string, recursive?: boolean): Promise<void>;
  rmdir(remoteFilePath: string, recursive?: boolean): Promise<void>;
  delete(remoteFilePath: string): Promise<void>;
  rename(remoteSourcePath: string, remoteDestPath: string): Promise<void>;
  end(): Promise<void>;
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
}
