// Type definitions for pg-promise
// Project: https://github.com/vitaly-t/pg-promise
// Definitions by: Jörg Dotzki <https://github.com/ISO50>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tsc --noImplicitAny --module commonjs --target ES6 pg-promise/pg-promise-tests.ts

/// <reference path="../pg/pg.d.ts" />


declare module PgPromise {
}


declare module "pg-promise" {

  import * as pg from "pg";

  function e(options?: {

    pgFormatting?: Object;
    promiseLib?: Object;
    connect?: Function;
    disconnect?: Function;
    query?: Function;
    task?: Function;
    transact?: Function;
    error?: Function;
    extend?: Function;
    noLocking?: Function;
  }): e.PgPromise;



  module e {

    export interface PromiseClient {

      none(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;
      one(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;
      many(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;
      query(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;


      any(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;
      oneOrNone(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;
      manyOrNone(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;

      func(queryText: string, values?: any[] | any, qrm?: any): Promise<any>;
      proc(queryText: string, values?: any[] | any): Promise<any>;

      task(func: Function): Promise<any>;
      tx(func: Function): Promise<any>;
    }

    export interface PgPromise {
      connect(callback?: (err: Error) => void): void;
      end(): void;
      (connectionString: string): PromiseClient;

      as: convert;
    }

    export interface convert {

      bool(value: any): boolean;
      number(value: any): number;
      text(value: any, raw: any): string;
      name(value: any): string;
      date(value: any, raw: any): string;
      json(value: any, raw: any): string;
      array(value: any): Array<any>;
      csv(value: any): string;
      func(func: Function, raw: any, obj: any): Function;
      format(query: string, values: any): any;
    }
  }

  export = e;
}
