export = Args;
declare function Args(args: any): void;
declare class Args {
    constructor(args: any);
    arguments: any;
    getLength(): any;
    private _checkRequired;
    private _validParameter;
    getTypeOf(
        index: any
    ): 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
    isInstanceOf(index: any, functionClass: any): boolean;
    private _validString;
    getString(index: any): any;
    getOptionalString(index: any, defaultValue: any): any;
    private _validInteger;
    getInteger(index: any): any;
    getOptionalInteger(index: any, defaultValue: any): any;
    private _validNumber;
    getNumber(index: any): any;
    getOptionalNumber(index: any, defaultValue: any): any;
    _validBoolean(index: any, value: any): boolean;
    getBoolean(index: any): any;
    getOptionalBoolean(index: any, defaultValue: any): any;
    private _validDate;
    getDate(index: any): any;
    getOptionalDate(index: any, defaultValue: any): any;
    private _validFile;
    getFile(index: any): any;
    getOptionalFile(index: any, defaultValue: any): any;
    private _validObject;
    getObject(index: any, functionClass: any, ...args: any[]): any;
    getOptionalObject(index: any, functionClass: any, defaultValue: any, ...args: any[]): any;
    getArray(index: any): any;
    getOptionalArray(index: any, defaultValue: any): any;
    getDataSet(index: any): any;
    getOptionalDataSet(index: any, defaultValue: any): any;
    getConnection(index: any): any;
    getOptionalConnection(index: any, defaultValue: any): any;
}
