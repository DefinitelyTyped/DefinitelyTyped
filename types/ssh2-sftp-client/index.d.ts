// Type definitions for ssh2-sftp-client v1.0.5
// Project: https://www.npmjs.com/package/ssh2-sftp-client
// Definitions by: igrayson <https://github.com/igrayson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="ssh2"/>

declare module "ssh2-sftp-client" {
  import * as ssh2 from 'ssh2';

  namespace sftp {

    interface FileInfo {
      type:string;
      name:string;
      size:number;
      modifyTime:number;
      accessTime:number;
      rights:{
        user:string;
        group:string;
        other:string;
      };
      owner:number;
      group:number;
    }

    interface Client {
      new():Client;
      connect(options:ssh2.ConnectConfig):Promise<void>;
      list(remoteFilePath:string):Promise<Array<FileInfo>>;
      get(remoteFilePath:string, useCompression?:boolean):Promise<NodeJS.ReadableStream>;
      put(localFilePath:string, remoteFilePath:string, useCompression?:boolean):Promise<void>;
      put(buffer:Buffer, remoteFilePath:string, useCompression?:boolean):Promise<void>;
      put(stream:NodeJS.ReadableStream, remoteFilePath:string, useCompression?:boolean):Promise<void>;
      mkdir(remoteFilePath:string, recursive?:boolean):Promise<void>;
      delete(remoteFilePath:string):Promise<void>;
      remove(remoteSourcePath:string, remoteDestPath:string):Promise<void>;
      end():Promise<void>;
    }
  }

  var sftp:sftp.Client;

  export = sftp;
}

