// Type definitions for oracledb v3.1.2
// Project: https://github.com/oracle/node-oracledb
// Definitions by: Richard Natal <https://github.com/Bigous>
//                 Connor Fitzgerald <https://github.com/CFitzgerald1995>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace oracledb {
    interface DBError {
        errorNum: number;
        message: string;
        offset: number;
    }

    interface Connection {
        action?: string;
        callTimeout?: number;
        clientId?: string;
        module?: string;
        oracleServerVersion?: number;
        oracleServerVersionString?: string;
        stmtCacheSize?: number;
        tag?: string;
    }

    interface ConnectionPool {
        connectionsInUse?: number;
        connectionsOpen?: number;
        poolAlias?: number;
        poolIncrement?: number;
        poolMax?: number;
        poolMin?: number;
        poolPingInterval?: number;
        poolTimeout?: number;
        queueTimeout?: number;
        status?: number;
        stmtCacheSize?: number;

        close(drainTime?: number): Promise<void>;
        close(drainTime: number, callback: (error: DBError) => void): void;
        close(callback: (error: DBError) => void): void;
    }

    interface PoolAttributes {
        connectString?: string;
        connectionString?: string;
        edition?: string;
        events?: boolean;
        externalAuth?: boolean;
        homogenous?: boolean;
        password?: string;
        poolAlias?: string;
        poolIncrement?: number;
        poolMax?: number;
        poolMin?: number;
        poolPingInterval?: number;
        poolTimeout?: number;
        queueTimeout?: number;
        sessionCallback?: string | ((connection: Connection, requestedTag: string, callback: (error: DBError) => void) => string);
        stmtCacheSize?: number;
        user?: string;
    }

    interface ConnectionAttributes {
        connectString?: string;
        connectionString?: string;
        edition?: string;
        events?: boolean;
        externalAuth?: boolean;
        matchAny?: boolean;
        newPassword?: string;
        password?: string;
        poolAlias?: string;
        privilege?: number;
        stmtCacheSize?: number;
        tag?: string;
        user?: string;
    }

    function createPool(poolAttributes: PoolAttributes): Promise<Connection>;
    function createPool(poolAttributes: PoolAttributes, callback: (error: DBError, pool: ConnectionPool) => void): void;

    function getConnection(poolAlias: string, callback: (error: DBError, connection: Connection) => void): void;
    function getConnection(connectionAttributes: ConnectionAttributes, callback: (error: DBError, connection: Connection) => void): void;
    function getConnection(callback: (error: DBError, connection: Connection) => void): void;
    function getConnection(poolAlias: string): Promise<Connection>;
    function getConnection(connectionAttributes: ConnectionAttributes): Promise<Connection>;
    function getConnection(): Promise<Connection>;

    function getPool(): ConnectionPool;
}

export = oracledb;