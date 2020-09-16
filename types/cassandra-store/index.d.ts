// Type definitions for cassandra-store 5.0
// Project: https://github.com/webcc/cassandra-store
// Definitions by: Ngo Quang Duong <https://github.com/QuangDuong120198>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="express" />

import { Store } from 'express-session';
import { ClientOptions, Client, EmptyCallback } from 'cassandra-driver';

interface CassandraStoreOptions {
    table: string;
    clientOptions: ClientOptions;
    client?: Client | null;
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
}
