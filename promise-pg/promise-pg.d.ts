// Type definitions for promise-pg
// Project: https://bitbucket.org/lplabs/promise-pg
// Definitions by: Chris Charabaruk <http://github.com/coldacid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../q/Q.d.ts" />
/// <reference path="../pg/pg.d.ts" />

declare module "promise-pg" {
  import * as stream from 'stream';
  import * as pg from 'pg';

  export {pg as raw};

  export interface ClientConfig extends pg.ClientConfig {}

  export function connect(connection: string): Q.Promise<Client>;
  export function connect(connection: pg.ClientConfig): Q.Promise<Client>;

  export function end(): Q.Promise<void>;

  export interface QueryConfig extends pg.QueryConfig {
    buffer?: boolean;
  }

  export class Client {
    constructor(connection: string);
    constructor(config: ClientConfig);

    raw: pg.Client;

    connect(): Q.Promise<void>;
    end(): Q.Promise<void>;

    query(queryText: string): Query;
    query(config: QueryConfig): Query;
    query(queryText: string, values: any[]): Query;

    copyFrom(queryText: string): stream.Writable;
    copyTo(queryText: string): stream.Readable;

    pauseDrain(): void;
    resumeDrain(): void;

    public on(event: "drain", listener: () => void): Client;
    public on(event: "error", listener: (err: Error) => void): Client;
    public on(event: "notification", listener: (message: any) => void): Client;
    public on(event: "notice", listener: (message: any) => void): Client;
    public on(event: string, listener: Function): Client;

    transaction(task: () => Q.Promise<any>): Q.Promise<any>;
  }

  export interface QueryResult extends pg.QueryResult {}
  export interface ResultBuilder extends pg.ResultBuilder {}

  export class Query extends pg.Query {
    promise: Q.Promise<QueryResult>;
  }
}
