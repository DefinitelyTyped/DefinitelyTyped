// Type definitions for pouchdb-core v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../es6-shim/es6-shim.d.ts" />

declare namespace PouchDB {
  export interface Callback<E, R> {
    (error: E | void, result: R | void): void;
  }
  export type GenericCallback = Callback<any, any>;

  export namespace Common {
    export interface NewDbOptions {
      /**
       * Database name.
       */
      name?: string;
      /**
       * Database adapter to use.
       *
       * If unspecified, PouchDB will infer this automatically, preferring
       * IndexedDB to WebSQL in browsers that support both (i.e. Chrome,
       * Opera and Android 4.4+).
       */
      adapter?: string;
    }
  }

  export interface DestroyDbOptions {
  }

  export namespace Local {
    export interface NewDbOptions extends Common.NewDbOptions {
      /**
       * Enables auto compaction, which means compact() is called after
       * every change to the database.
       *
       * Defaults to false.
       */
      auto_compaction?: boolean;
      /**
       * How many old revisions we keep track (not a copy) of.
       */
      revs_limit?: number;
    }
  }

  export namespace Remote {
    export interface RequesterOptions {
      /**
       * Time before HTTP requests time out (in ms).
       */
      timeout?: number;
      /**
       * Appends a random string to the end of all HTTP GET requests to avoid
       * them being cached on IE. Set this to true to prevent this happening.
       */
      cache?: boolean;
      /**
       * HTTP headers to add to requests.
       */
      headers?: {
        [name: string]: string;
      }
      username?: string;
      password?: string;
      /**
       * Enables transferring cookies and HTTP Authorization information.
       *
       * Defaults to true.
       */
      withCredentials?: boolean;
      /**
       * Disables automatic creation of databases.
       */
      skip_setup?: boolean;
    }

    export interface NewDbOptions extends Common.NewDbOptions {
      /**
       * Options for remote requests.
       */
      ajax?: Remote.RequesterOptions;
    }
  }

  /**
   * Pass this to `PouchDB.plugin()`.
   */
  export type Plugin = Static;

  export interface Static {
    plugin(plugin: Plugin): Static;

    new(name: string, options?: Remote.NewDbOptions): Database;
    new(name: string, options?: Local.NewDbOptions): Database;
  }

  export interface Database {
    destroy(options: DestroyDbOptions | void, callback: GenericCallback): void;
    destroy(options?: DestroyDbOptions | void): Promise<Database>;
  }
}

declare module 'pouchdb-core' {
  const PouchDb: PouchDB.Static;
  export = PouchDb;
}

declare const PouchDB: PouchDB.Static;
