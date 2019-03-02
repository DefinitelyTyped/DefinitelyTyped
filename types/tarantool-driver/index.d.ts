// Type definitions for tarantool-driver 3.0
// Project: https://github.com/tarantool/node-tarantool-driver
// Definitions by: Evgeni Zharkov <https://github.com/zharkov-eu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";

export interface TarantoolOptions {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  reserveHosts?: string[];
  beforeReserve?: number;
  timeout?: number;
  retryStrategy?: (times: number) => number;
  lazyConnect?: boolean;
}

export default class TarantoolConnection extends EventEmitter {
  constructor(options: TarantoolOptions);

  /* Connection */

  connect(): Promise<void>;

  flushQueue(cb: (err: Error) => void): void;

  destroy(): void;

  disconnect(reconnect?: boolean): void;

  /* Commands */

  select(spaceId: number | string,
                indexId: number | string,
                limit: number, offset: number,
                iterator: string, key: string | string[]): Promise<any>;

  delete(spaceId: number | string,
                indexId: number | string,
                key: any[]): Promise<any>;

  update(spaceId: number | string,
                indexId: number | string,
                key: any[], ops: any[]): Promise<any>;

  upsert(spaceId: number | string,
                ops: any[], tuple: any[]): Promise<any>;

  eval(expression: string, ...args: any[]): Promise<any>;

  call(functionName: string, ...args: any[]): Promise<any>;

  insert(spaceId: number | string, tuple: any[]): Promise<any>;

  replace(spaceId: number | string, tuple: any[]): Promise<any>;
}
