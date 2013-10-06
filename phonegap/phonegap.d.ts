// Type definitions for PhoneGap 2.3
// Project: http://phonegap.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface EventTarget {
    result: any;
}

interface GeolocationError {
    code: number;
    message: string;
}

interface GeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

/*
interface InAppBrowser {
    addEventListener(eventname: string, callback): void;
    removeEventListener(eventname: string, callback): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window;
    close(): void;
}
*/

interface Database {
    transaction(populateDB?: (tx: SQLTransaction) => any, errorCB?: (err) => any, successCB?: () => any);
    changeVersion(var1: string, var2: string);
}

interface SQLResultSetRowList {
    length: number;
    item(index: number): any;
}

interface SQLError {
    code: number;
    message: string;
}

interface SQLResultSet {
    insertId: number;
    rowsAffected: number;
    rows: SQLResultSetRowList;
}

interface SQLTransaction {
    executeSql(sql: string): SQLResultSet;
}

/* Defined in lib.d.ts

interface LocalStorage {
    key;
    getItem;
    setItem;
    removeItem;
    clear;
}
*/

interface Window {
    requestFileSystem: any;
    openDatabase(database_name: string, database_version: string, database_displayname: string, database_size: number): Database;
}

declare var phoneGapNavigator: Navigator /*PhoneGapNavigator*/;
