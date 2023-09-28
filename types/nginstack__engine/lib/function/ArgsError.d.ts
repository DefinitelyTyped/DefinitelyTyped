export = ArgsError;
declare function ArgsError(...args: any[]): void;
declare class ArgsError {
    constructor(...args: any[]);
    private _name;
}
declare namespace ArgsError {
    const REQUIRED_PARAMETER: number;
    const INVALID_PARAMETER_TYPE: number;
}
