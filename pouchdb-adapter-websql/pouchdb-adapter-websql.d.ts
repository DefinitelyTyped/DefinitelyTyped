// Type definitions for pouchdb-adapter-websql v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />

declare namespace PouchDB {
  export namespace Remote {
    export interface NewDbOptions {
      /**
       * Amount in MB to request for storage.
       */
      size?: number
    }
  }
}

declare module 'pouchdb-adapter-websql' {
  const plugin: PouchDB.Plugin;
  export = plugin;
}
