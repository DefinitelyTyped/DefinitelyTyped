export = Args;
declare function Args(args: any): void;
declare class Args {
    constructor(args: any);
    arguments: any;
    getLength(): any;
    _checkRequired(index: any, args: any, getMode: any): void;
    _validParameter(func: any, idx: any, getMode: any, defaultValue: any): any;
    getTypeOf(
        index: any
    ): 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
    isInstanceOf(index: any, functionClass: any): boolean;
    _validString(index: any, value: any): any;
    getString(index: any): any;
    getOptionalString(index: any, defaultValue: any): any;
    _validInteger(index: any, value: any): number;
    getInteger(index: any): any;
    getOptionalInteger(index: any, defaultValue: any): any;
    _validNumber(index: any, value: any): number;
    getNumber(index: any): any;
    getOptionalNumber(index: any, defaultValue: any): any;
    _validBoolean(index: any, value: any): boolean;
    getBoolean(index: any): any;
    getOptionalBoolean(index: any, defaultValue: any): any;
    _validDate(index: any, value: any): any;
    getDate(index: any): any;
    getOptionalDate(index: any, defaultValue: any): any;
    _validFile(index: any, value: any): any;
    getFile(index: any): any;
    getOptionalFile(index: any, defaultValue: any): any;
    _validObject(index: any, value: any, functionClass: any): any;
    getObject(index: any, functionClass: any, ...args: any[]): any;
    getOptionalObject(index: any, functionClass: any, defaultValue: any, ...args: any[]): any;
    getArray(index: any): any;
    getOptionalArray(index: any, defaultValue: any): any;
    getDataSet(index: any): any;
    getOptionalDataSet(index: any, defaultValue: any): any;
    getConnection(index: any): any;
    getOptionalConnection(index: any, defaultValue: any): any;
}
