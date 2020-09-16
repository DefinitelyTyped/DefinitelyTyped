// Type definitions for sybase-promised 1.0
// Project: https://github.com/mscamargo/sybase-promised#readme
// Definitions by: Sergey12313 <https://github.com/sergey12313>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace sybasepromised;

declare namespace SybasePromised {
    interface ConnectionOptions {
        host: string;
        port: number;
        dbname: string;
        username: string;
        password: string;
        logTiming?: boolean;
        pathToJavaBtidge?: string;
    }
}

declare class SybasePromised {
    constructor(options: SybasePromised.ConnectionOptions);
    connect(): Promise<this>;
    query(sql: string): Promise<any[]>;
    disconnect(): void;
}

export = SybasePromised;
