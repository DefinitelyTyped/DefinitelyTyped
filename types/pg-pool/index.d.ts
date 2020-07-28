// Type definitions for pg-pool 2.0
// Project: https://github.com/brianc/node-pg-pool
// Definitions by: Leo Liang <https://github.com/aleung>, Nikita Tokarchuk <https://github.com/mainnika>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as pg from 'pg';

declare class Pool<T extends pg.Client> extends pg.Pool {
    readonly Client: Pool.ClientLikeCtr<T>;

    constructor(config?: Pool.Config<T>, client?: Pool.ClientLikeCtr<T>);

    connect(): Promise<T & pg.PoolClient>;
    connect(callback: (err?: Error, client?: T & pg.PoolClient, done?: (release?: any) => void) => void): void;

    on(event: 'error', listener: (err: Error, client: T & pg.PoolClient) => void): this;
    on(event: 'connect' | 'acquire' | 'remove', listener: (client: T & pg.PoolClient) => void): this;
}

declare namespace Pool {
    type ClientLikeCtr<T extends pg.Client> = new(config?: string | pg.ClientConfig) => T;

    interface Config<T extends pg.Client> extends pg.PoolConfig {
        Client?: ClientLikeCtr<T>;
    }
}

export = Pool;
