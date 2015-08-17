// Type definitions for node-mysql-wrapper
// Project: https://github.com/kataras/node-mysql-wrapper
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../mysql/mysql.d.ts' />

declare module "node-mysql-wrapper" {
    import Mysql = require("mysql");

    function MySQLWrapperBuilder(connection: string | Mysql.IConnection, ...useOnlyTables: string[]): MySQLWrapper;

    enum EVENT_TYPES {
        INSERT, UPDATE, DELETE, SAVE
    }

    interface MySQLConnection {
        new (connection: string | Mysql.IConnection): MySQLConnection;

        create(connectionUri: string): void;
        create(connection: Mysql.IConnection): void;

        attach(connection: Mysql.IConnection): void;
        end(callback: () => void): void;
        destroy(): void;
        link<U>(callback?: () => void): Promise<U>;
        connect<U>(callback?: () => void): Promise<U>;

        useOnly(...useOnlyTables: string[]): void;

        fetchDatabaseInfornation<U>(): Promise<U>;

        escape(val: string): string;
        notice(tableWhichCalled: string, queryStr: string, parsedResults: Object[]): void;
        fireEvent(tableWhichCalled: string, queryStr: string, parsedResults: Object[]): void;

        watch(tableName: string, evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void): void;
        on(tableName: string, evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void): void;
        unwatch(tableName: string, evtType: EVENT_TYPES | string, callbackToRemove: () => void): void;
        off(tableName: string, evtType: EVENT_TYPES | string, callbackToRemove: () => void): void;

        query(mysqlQuery: Mysql.IQueryFunction): void;

        table(tableName: string): MySQLTable;
    }

    interface MySQLTable {
        new (tableName: string, connection: MySQLConnection): MySQLTable;

        setColumns(columns: string[]): void;

        setPrimaryKey(primaryKeyColumnName: string): void;

        toString(): string;

        model(jsObject: Object): MySQLModel;

        watch(evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void): void;
        on(evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void): void;
        unwatch(evtType: EVENT_TYPES|string, callbackToRemove: () => void): void;
        off(evtType: EVENT_TYPES|string, callbackToRemove: () => void): void;

        ///START DYNAMIC METHODS FOR TABLES CANNOT BE PRE-DEFINED WITH DYNAMIC WAY, YET, SO:
        find<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        save<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        remove<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        delete<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        safeDelete<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        ///END
        findAll<U>(callback?: (results: Object[]) => void): Promise<U>;

        extend(functionName: string, functionToBeSupported: () => any): void;

        has(extendedFunctionName: string): boolean;

    }

    interface MySQLModel {

        new (table: MySQLTable, jsObject: Object): MySQLModel;

        toObjectProperty(columnKey: string): string;
        toRowProperty(objectKey: string): string;

        create(jsObject: Object): MySQLModel;
        reUse(jsObject: Object): MySQLModel;

        toRow(): void;
        getRawObject(): Object;

        parseTable<U>(mysqlTableToSearch: String, parentObject: Object): Promise<U>;
        parseResult<U>(result: Object, tablesToSearch: string[]): Promise<U>;

        find<U>(parentObj?: Object): Promise<U>;
        findAll<U>(): Promise<U>;
        save<U>(): Promise<U>;
        safeDelete<U>(): Promise<U>;
        remove<U>(): Promise<U>;
        delete<U>(): Promise<U>;

    }

    interface MySQLWrapper {
        new (connection?: MySQLConnection): MySQLWrapper;

        setConnection(connection: MySQLConnection): void;

        useOnly(...useOnlyTables: string[]): void;

        has(tableName: string): boolean;
        has(tableName: string, methodName: string): boolean;

        ready(callback: () => void): void;
        noticeReady(): void;
        removeReadyListener(callback: () => any): void;

        query: Mysql.IQueryFunction;

        destroy(): void;
        end(callback?: () => void): void;

        when<U>(): Promise<U[]>;

        ///START: WE CANNOT PRE-DEFINE THE DYNAMIC TABLES INTO PROPERTIES, SO WE USE INDEX(STRING-TABLENAME) TO GET A TABLE
        table(tableName: string): MySQLTable;
        ///END
    }

    export = MySQLWrapperBuilder;
}
