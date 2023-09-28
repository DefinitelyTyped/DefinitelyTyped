export = FrameworkError;
declare function FrameworkError(...args: any[]): void;
declare class FrameworkError {
    constructor(...args: any[]);
    private _name;
}
declare namespace FrameworkError {
    const TIMEOUT: number;
}
