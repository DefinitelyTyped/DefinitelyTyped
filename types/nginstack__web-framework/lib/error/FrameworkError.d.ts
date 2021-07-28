export = FrameworkError;
declare function FrameworkError(...args: any[]): void;
declare class FrameworkError {
    constructor(...args: any[]);
    _name: string;
}
declare namespace FrameworkError {
    const TIMEOUT: number;
}
