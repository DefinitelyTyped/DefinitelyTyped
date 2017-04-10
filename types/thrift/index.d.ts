// Type definitions for thrift 0.10.0
// Project: https://www.npmjs.com/package/thrift
// Definitions by: Kamek <https://github.com/kamek-pf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Thrift;

/**
 * Protocols and Transports
 */
export class TBufferedTransport {}
export class TXHRTransport {}
export class TJSONProtocol {}
export class TBinaryProtocol {}

/**
 * Server side
 */
export interface ThriftServer {
     listen(port: number): any;
}

export function createServer(generatedService: any, serviceMethods: any): ThriftServer;

/**
 * Client side
 */
export interface ClientConnectionParams {
     transport: TJSONProtocol | TBinaryProtocol;
     protocol: TBufferedTransport | TXHRTransport;
}

export function createConnection(host: string, port: number, params: ClientConnectionParams): {};
export function createClient(generatedService: any, connection: {}): any;
