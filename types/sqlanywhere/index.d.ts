declare module "sqlanywhere" {
    export function createConnection(): SybaseConnection;

    export interface SybaseConnection {
      connect(
        params: ConnectionParameters,
        cb: (err: Error | undefined) => void,
      ): void;
      close(cb: (err?: Error) => void): void;
      disconnect(cb: (err?: Error) => void): void;
      connected(): boolean;
      exec(query: string, cb: (err: Error | undefined, result: any) => void);
      exec(
        query: string,
        placeholders: any[],
        cb: (err: Error | undefined, result: any) => void,
      );
      exec<T>(query: string, cb: (err: Error | undefined, result: T[]) => void);
      exec<T>(
        query: string,
        placeholders: any[],
        cb: (err: Error | undefined, result: T[]) => void,
      );
      prepare(
        query: string,
        cb: (err: Error | undefined, stmt: Statement) => void,
      );
      prepare(query: string): Statement;
      commit(cb: (err: Error | undefined) => void): void;
      rollback(cb: (err: Error | undefined) => void): void;
    }

    export interface ConnectionParameters {
      Server: string;
      UserId: string;
      DatabaseFile?: string;
      AutoStart?: string;
      Password: string;
      Host?: string;
    }

    export interface Statement {
      exec(args: any[], cb: (err: Error | undefined, rows: any[]) => void);
      exec<T>(args: any[], cb: (err: Error | undefined, rows: T[]) => void);
      exec(args: any[]): any[];
      exec<T>(args: any[]): T[];
      getMoreResults(): any[];
      getMoreResults<T>(): T[];
      drop(cb: (err: Error | undefined) => void): void;
    }
    const _default: {
        createConnection: typeof createConnection;
    };
    export default _default;
  }
