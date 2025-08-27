interface Options {
    host?: string | undefined;
    hostname?: string | undefined;
    cache?: boolean | undefined;
    raw?: boolean | undefined;
    forceSave?: boolean | undefined;
    auth?: string | {
        username: string;
        password: string;
    } | undefined;
    ca?: string | undefined;
    secure?: boolean | undefined;
    retries?: number | undefined;
    retryTimeout?: number | undefined;
    maxSockets?: number | undefined;
}

interface Callback {
    (error: any, response: any): void;
}

interface ErrorCallback {
    (error: any): void;
}

export declare class Connection {
    constructor(uri?: string, port?: number, options?: Options);
    database(name: string): Database;
    databases(Callback: Callback): void;
    config(callback: Callback): void;
    info(callback: Callback): void;
    stats(callback: Callback): void;
    activeTasks(callback: Callback): void;
    uuids(callback: Callback): void;
    uuids(count: number, callback: Callback): void;
    replicate(options: {
        source: string | {
            url: string;
        };
        target: string | {
            url: string;
        };
        cancel?: boolean | undefined;
        continuous?: boolean | undefined;
        create_target?: boolean | undefined;
        doc_ids?: string[] | undefined;
        filter?: string | undefined;
        proxy?: string | undefined;
        query_params?: any;
    }, callback: Callback): void;
}

export interface ChangesOptions {
    since: number;
}

export declare class Database {
    name: string;
    get(id: string, callback: (error: any, document: any) => void): void;
    get<T>(id: string, callback: (error: any, document: T) => void): void;
    get(id: string, rev: string, callback: (error: any, document: any) => void): void;
    get<T>(id: string, rev: string, callback: (error: any, document: T) => void): void;
    get(ids: string[], callback: Callback): void;
    save(document: any, callback: Callback): void;
    save(id: string, document: any, callback: Callback): void;
    save(id: string, revision: string, document: any, callback: Callback): void;
    save<T>(document: T, callback: Callback): void;
    save<T>(id: string, document: T, callback: Callback): void;
    save<T>(id: string, revision: string, document: T, callback: Callback): void;
    save(documents: any[], callback: Callback): void;
    merge(id: string, document: any, callback: Callback): void;
    merge<T>(id: string, document: T, callback: Callback): void;
    remove(id: string, revision: string, callback: Callback): void;
    update(name: string, id: string, queryObject: any, documentBody: any, callback: Callback): void;
    view(name: string, callback: Callback): void;
    view(name: string, options: {
        group?: boolean | undefined;
        reduce?: boolean | undefined;
        key?: string | undefined;
        startkey?: any;
        endkey?: any;
        include_docs?: boolean | undefined;
        limit?: number | undefined;
        descending?: boolean | undefined;
    }, callback: Callback): void;
    temporaryView(view: any, callback: Callback): void;
    create(callback: ErrorCallback): void;
    exists(callback: (error: any, exists: boolean) => void): void;
    destroy(callback: ErrorCallback): void;
    changes(options: ChangesOptions): any;
    changes(callback: (error: any, list: any[]) => void): void;
    changes(options: ChangesOptions, callback: (error: any, list: any[]) => void): void;
    saveAttachment(
        idAndRevData: {
            id: string;
            rev: string;
        },
        attachmentData: any,
        callback: Callback,
    ): void;
    getAttachment(id: string, attachmentName: string, callback: Callback): void;
    removeAttachment(id: string, attachmentName: string, callback: Callback): void;
    info(callback: Callback): void;
    all(callback: Callback): void;
    all(options: any, callback: Callback): void;
    compact(callback: Callback): void;
    compact(design: string, callback: Callback): void;
    viewCleanup(callback: Callback): void;
    replicate(target: string, callback: Callback): void;
    replicate(target: string, options: any, callback: Callback): void;
}

export declare function setup(options: Options): void;
