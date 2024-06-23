import * as pg from "pg";

declare class Pool<T extends pg.Client> extends pg.Pool {
    readonly Client: Pool.ClientLikeCtr<T>;

    constructor(config?: Pool.Config<T>, client?: Pool.ClientLikeCtr<T>);

    connect(): Promise<T & pg.PoolClient>;
    connect(callback: (err?: Error, client?: T & pg.PoolClient, done?: (release?: any) => void) => void): void;

    on(event: "error", listener: (err: Error, client: T & pg.PoolClient) => void): this;
    on(event: "connect" | "acquire" | "remove", listener: (client: T & pg.PoolClient) => void): this;
}

declare namespace Pool {
    type ClientLikeCtr<T extends pg.Client> = new(config?: string | pg.ClientConfig) => T;

    interface Config<T extends pg.Client> extends pg.PoolConfig {
        Client?: ClientLikeCtr<T> | undefined;
    }
}

export = Pool;
