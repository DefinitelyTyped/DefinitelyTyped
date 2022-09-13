// Type definitions for cassandra-store 5.0
// Project: https://github.com/webcc/cassandra-store
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="express" />

import { Store, SessionData } from 'express-session';
import { ClientOptions, Client, EmptyCallback } from 'cassandra-driver';

interface CassandraStoreOptions {
    table: string;
    clientOptions: ClientOptions;
    client?: Client | null | undefined;
}

export = CassandraStore;

declare class CassandraStore extends Store {
    private _client: Client;
    private _clientOptions: ClientOptions;

    constructor(opts: CassandraStoreOptions, callback?: EmptyCallback);

    get client(): Client;

    set client(value: Client);

    get clientOptions(): ClientOptions;

    set clientOptions(value: ClientOptions);

    get table(): string;

    set table(value: string);

    get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
    set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
    destroy(sid: string, callback?: (err?: any) => void): void;

    all(callback: (err: any, obj?: SessionData[] | { [sid: string]: SessionData; } | null) => void): void;
    length(callback: (err: any, length: number) => void): void;
    clear(callback?: (err?: any) => void): void;
    touch(sid: string, session: SessionData, callback?: () => void): void;
}
