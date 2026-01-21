export = ArgsError;
/**
 * @constructor
 * @extends FatalError
 */
declare function ArgsError(...args: any[]): void;
declare class ArgsError {
    /**
     * @constructor
     * @extends FatalError
     */
    constructor(...args: any[]);
    /** @private */
    private _name;
}
declare namespace ArgsError {
    let REQUIRED_PARAMETER: number;
    let INVALID_PARAMETER_TYPE: number;
}
