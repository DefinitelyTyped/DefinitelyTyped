// Type definitions for massive 3.0.0-rc1
// Project: https://github.com/dmfay/massive-js.git
// Definitions by: Pascal Birchler <https://github.com/swissspidy>
//                 Clarence Ho <https://github.com/clarenceh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = massive;

declare function massive(
  connection: object | string,
  loaderConfig?: object,
  driverConfig?: object): Promise<massive.Database>;

declare namespace massive {

  export interface ConnectionInfo {

    user?: string;
    database?: string;
    password?: string | null;
    port?: number;
    host?: string;
    ssl?: boolean;
    application_name?: string;
    fallback_application_name?: boolean;

  }

  export interface Database {

    attach(ctor: Function, ...sources: (Function | Promise<any>)[]): Promise<any>;

    detach(entity: string, collection: string): void;

    reload(): void;

    query(query: any, params: any, options: any): Promise<any>;

    saveDoc(collection: any, doc: any): any;

    createDocumentTable(path: any): Promise<any>;

    getObject(path: any, collection: any): object;

    dropTable(table: string, options: any): void;

    createSchema(schemaName: string): void;

    dropSchema(schemaName: string, options: any): void;

    [name: string]: any;

  }

}
