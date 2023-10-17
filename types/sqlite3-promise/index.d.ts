import * as sqlite3 from "sqlite3";
export * from "sqlite3";

declare module "sqlite3" {
    interface Database {
        allAsync(sql: string): Promise<any[]>;
        closeAsync(): Promise<void>;
        eachAsync(sql: string, cb?: (this: Statement, err: Error | null, row: any) => void): Promise<number>;
        eachAsync(
            sql: string,
            params: any,
            cb?: (this: Statement, err: Error | null, row: any) => void,
        ): Promise<number>;
        execAsync(sql: string): Promise<Statement>;
        getAsync(sql: string): Promise<any>;
        runAsync(sql: string): Promise<void>;
    }
}
