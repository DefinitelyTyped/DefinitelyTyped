// Type definitions for buffer-server 1.2
// Project: https://github.com/ldmsys/buffer-server#readme
// Definitions by: ldmsys <https://github.com/ldmsys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function sftp_server(serverKey: string, allowedUser: string, allowedPass: string, filename: string, filedata: Buffer): Promise<number>;
export function web_server(index: string, filename: string, filedata: Buffer): Promise<number>;
