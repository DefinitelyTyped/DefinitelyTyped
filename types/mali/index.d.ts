// Type definitions for mali 0.9
// Project: https://github.com/malijs/mali
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
//         		   Bojan D. <https://github.com/bojand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Stream } from 'stream';
import * as grpc from 'grpc';

type GrpcRequest =
  | grpc.ServerUnaryCall<any>
  | grpc.ServerReadableStream<any>
  | grpc.ServerWriteableStream<any>
  | grpc.ServerDuplexStream<any, any>;

type GrpcResponse =
  | grpc.ClientUnaryCall
  | grpc.ClientReadableStream<any>
  | grpc.ClientWritableStream<any>
  | grpc.ClientDuplexStream<any, any>;

declare class Mali extends EventEmitter {
  constructor(path: any, name?: string | ReadonlyArray<string>, options?: any);
  name: string;
  env: string;
  ports: ReadonlyArray<number>;
  silent: boolean;

  addService(path: any, name: string | ReadonlyArray<string>, options?: any): void;
  use(service?: any, name?: any, fns?: any): void;
  start(port: number | string, creds?: any, options?: any): grpc.Server;
  toJSON(): any;
  close(): Promise<void>;
  inspect(): any;
}

declare namespace Mali {
  interface Context {
    name: string;
    fullName: string;
    service: string;
    package: string;
    app: Mali;
    call: any;
    request: Request;
    response: Response;
    req: GrpcRequest;
    res: GrpcResponse;
    type: string;
    metadata: any;
    get(field: string): any;
    set(field: any, val?: any): void;
    sendMetadata(md: any): void;
    getStatus(field: string): any;
    setStatus(field: any, val?: any): void;
  }

  class Request {
    constructor(call: any, type: string);
    call: any;
    type: string;
    metadata: any;
    req: GrpcRequest;

    getMetadata(): grpc.Metadata;
    get(field: string): any;
  }

  class Response {
    constructor(call: any, type: string);
    call: any;
    type: string;
    metadata: any;
    status: any;
    res: GrpcResponse;
    set(field: any, val?: any): void;
    get(field: string): any;
    getMetadata(): grpc.Metadata;
    sendMetadata(md?: any): void;
    getStatus(field: string): any;
    setStatus(field: any, val?: any): void;
  }

  function exec(ctx: Context, handler: any, cb?: any): void;
}

export = Mali;
