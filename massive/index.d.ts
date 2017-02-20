// Type definitions for massive-js 2.2
// Project: https://github.com/robconery/massive-js
// Definitions by: Pascal Birchler <https://github.com/swissspidy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module massive {
    interface IConnectionOptions {
        connectionString?: string;
        db?: string;
    }

    export type ResultCallback = (err: Error, res: any) => void;
    export type ConnectCallback = (err: Error, db: Massive) => void;

    export interface QueryOptions {
        limit?: number;
        order?: string;
        offset?: number;
        columns?: string[];
    }

    export interface Table {
        count(context: any, callback: ResultCallback): void;
        find(context: any, callback: ResultCallback): void;
        find(context: any, options: QueryOptions, callback: ResultCallback): void;
        findOne(context: any, callback: ResultCallback): void;
        findOne(context: any, options: QueryOptions, callback: ResultCallback): void;
        insert(context: any, callback: ResultCallback): void;
        save(context: any, callback: ResultCallback): void;
        update(context: any, callback: ResultCallback): void;
        update(context: any, data: any, callback: ResultCallback): void;
        destroy(context: any, callback: ResultCallback): void;
    }

    interface Doc {
        findDoc(context: any, callback: ResultCallback): void;
        searchDoc(options: {
            keys: string[];
            term: string;
        }, callback: ResultCallback): void;
        saveDoc(context: string, callback: ResultCallback): void;
        destroy(context: any, callback: ResultCallback): void;
    }

    interface QueryFile {
        schema: string;
        name: string;
        db: Massive;
        delimitedName: string;
        delimitedSchema: string;
        fullname: string;
        delimitedFullName: string;
        sql: string;
        filePath: string;
    }

    interface QueryFunction {
        find: (params: any|any[], callback: ResultCallback) => void;
    }

    export interface Massive {
        custom: any;
        comment: Table;
        friendship: Table;
        participation: Table;
        person: Table;
        practice: Table;
        practicesession: Table;
        sport: Table;
        testdata: (callback: ResultCallback) => void;
        team: Table;
        teammember: Table;
        teamsport: Table;
        scriptsDir: string;
        connectionString: string;
        query: Function;
        stream: Function;
        executeSqlFile: Function;
        end: Function;
        tables: Array<Doc|Table>;
        views: any[];
        queryFiles: QueryFile[];
        schemas: any[];
        functions: any[];
        allowedSchemas: string;
        blacklist: string;
        exceptions: string;
        excludeFunctions: boolean;
        functionBlacklist: string;
    }

    export function connectSync(options: IConnectionOptions): Massive

    export function connect(options: IConnectionOptions, callback: ConnectCallback): void;

    export function run(context: string, filter: number|number[], callback: ResultCallback): void;

    export function saveDoc(name: string, data: any, callback: ResultCallback): void;
}

export = massive;
