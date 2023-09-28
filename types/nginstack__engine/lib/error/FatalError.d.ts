export = FatalError;
declare function FatalError(...args: any[]): void;
declare class FatalError {
    constructor(...args: any[]);
    private _name;
}
