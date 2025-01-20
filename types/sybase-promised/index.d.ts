export as namespace sybasepromised;

declare namespace SybasePromised {
    interface ConnectionOptions {
        host: string;
        port: number;
        dbname: string;
        username: string;
        password: string;
        logTiming?: boolean | undefined;
        pathToJavaBtidge?: string | undefined;
    }
}

declare class SybasePromised {
    constructor(options: SybasePromised.ConnectionOptions);
    connect(): Promise<this>;
    query(sql: string): Promise<any[]>;
    disconnect(): void;
}

export = SybasePromised;
