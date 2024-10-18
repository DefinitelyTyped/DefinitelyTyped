declare namespace pgDatabaseUrl {
    interface Config {
        database: string;
        host?: string;
        password?: string;
        port?: number;
        username: string;
    }
}

declare function pgDatabaseUrl(config: pgDatabaseUrl.Config): string;

export = pgDatabaseUrl;
