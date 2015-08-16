// Type definitions for node-mysql-wrapper
// Project: https://github.com/kataras/node-mysql-wrapper
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='./../mysql/mysql.d.ts' />
///<reference path='./../bluebird/bluebird.d.ts' />

declare module "node-mysql-wrapper" {
    import Mysql = require("mysql");

    function MySQLWrapperBuilder(connection: string | Mysql.IConnection, ...useOnlyTables: string[]): MySQLWrapper;

    enum EVENT_TYPES {
        INSERT, UPDATE, DELETE, SAVE
    }

    interface MySQLConnection {
        constructor(connection: string | Mysql.IConnection);

        create(connectionUri: string);
        create(connection: Mysql.IConnection);

        attach(connection: Mysql.IConnection): void;
        end(callback: () => void): void;
        destroy(): void;
        link<U>(callback?: () => void): Promise<U>;
        connect<U>(callback?: () => void): Promise<U>;

        useOnly(...useOnlyTables: string[]): void;

        fetchDatabaseInfornation<U>(): Promise<U>;

        escape(val: string): string;
        notice(tableWhichCalled: string, queryStr: string, parsedResults: Object[]);
        fireEvent(tableWhichCalled: string, queryStr: string, parsedResults: Object[]);

        watch(tableName: string, evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void): void;
        on(tableName: string, evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void): void;
        unwatch(tableName: string, evtType: EVENT_TYPES | string, callbackToRemove: () => void): void;
        off(tableName: string, evtType: EVENT_TYPES | string, callbackToRemove: () => void): void;

        query(mysqlQuery: Mysql.IQueryFunction): void;

        table(tableName: string): MySQLTable;
    }

    interface MySQLTable {
        constructor(tableName: string, connection: MySQLConnection);

        setColumns(columns: string[]);

        setPrimaryKey(primaryKeyColumnName: string);

        toString(): string;

        model(jsObject: Object): MySQLModel;

        watch(evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void);
        on(evtType: EVENT_TYPES | string, callback: (parsedResults: Object[]) => void);
        unwatch(evtType: EVENT_TYPES|string, callbackToRemove: () => void);
        off(evtType: EVENT_TYPES|string, callbackToRemove: () => void);
        
        ///START DYNAMIC METHODS FOR TABLES CANNOT BE PRE-DEFINED WITH DYNAMIC WAY, YET, SO:
        find<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        save<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        remove<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        delete<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        safeDelete<U>(jsObject: Object, callback?: (results: Object[]) => void): Promise<U>;
        ///END 
        findAll<U>(callback?: (results: Object[]) => void): Promise<U>;

        extend(functionName: string, functionToBeSupported: () => any);

        has(extendedFunctionName: string);

    }

    interface MySQLModel {
        constructor(table: MySQLTable, jsObject: Object);

        toObjectProperty(columnKey: string): string;
        toRowProperty(objectKey: string): string;

        create(jsObject: Object): MySQLModel;
        reUse(jsObject: Object): MySQLModel;

        toRow(): void;
        getRawObject(): Object;

        parseTable(mysqlTableToSearch: String, parentObject: Object);
        parseResult(result: Object, tablesToSearch: string[]);

        find<U>(parentObj?: Object): Promise<U>;
        findAll<U>(): Promise<U>;
        save<U>(): Promise<U>;
        safeDelete<U>(): Promise<U>;
        remove<U>(): Promise<U>;
        delete<U>(): Promise<U>;

    }

    interface MySQLWrapper {
        constructor(connection?: MySQLConnection);

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
