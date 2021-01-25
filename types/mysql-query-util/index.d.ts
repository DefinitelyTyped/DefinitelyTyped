// Type definitions for mysql-query-util 0.2
// Project: https://github.com/uchennaemeruche/mysql-util#readme
// Definitions by: Uchenna Emeruche <https://github.com/uchennaemeruche>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module has methods, declare them as functions like so.
 */
declare function _delete(...options: any[]): any;

export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

export function setConnection(options: connectionString): any;

export function select(...options: any[]): Promise<any>;
export function insert(...options: [string, string[], string[], string[]]): Promise<any>;
export function update(...options: [string, string[], string[], string[]]): Promise<any>;
export { _delete as delete };

export function query(queryType: any, tableName: any, fields: any, data: any, params: any): Promise<any>;
/*~ You can declare types that are available via importing the module */

export interface connectionString {
    /**
     * The hostname of the database you are connecting to. (Default: localhost)
     */
    host: string;
    /**
     * The MySQL user to authenticate as
     */
    user: string;
    /**
     * The password of that MySQL user
     */
    password: string;
    /**
     * Name of the database to use for this connection
     */
    database: string;
    /**
     * The maximum number of connections to create at once. (Default: 10)
     */
    connectionLimit?: number;
}
