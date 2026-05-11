export = ArgsError;
declare function ArgsError(...args: any[]): void;
declare class ArgsError {
    constructor(...args: any[]);
    private _name;
}
declare namespace ArgsError {
    let REQUIRED_PARAMETER: number;
    let INVALID_PARAMETER_TYPE: number;
}
