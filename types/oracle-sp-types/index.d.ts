// Type definitions for oracle-sp-types 1.4
// Project: https://github.com/ignaciocaff/oracle-node-sp
// Definitions by: Ignacio Caffaratti <https://github.com/ignaciocaff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Create an object passing parameters and store procedure name, and then execute it for Oracle 12c and later
 */
export class StoreProcedureDb {
    name: string;
    parameters: any[];
    size: number;
    constructor(name: string, parameters?: any[]);
    executeSp(): Promise<any>;
}
