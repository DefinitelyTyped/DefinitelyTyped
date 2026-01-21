export = FieldListError;
/**
 * Classe de erro de FieldList.
 * @constructor
 * @extends FatalError
 */
declare function FieldListError(...args: any[]): void;
declare class FieldListError {
    /**
     * Classe de erro de FieldList.
     * @constructor
     * @extends FatalError
     */
    constructor(...args: any[]);
    /** @private */
    private _name;
}
declare namespace FieldListError {
    let DOUBLE_ADD: number;
    let INVALID_PROPERTY_NAME: number;
    let INVALID_ARGUMENTS_LENGTH: number;
    let INVALID_ARGUMENT_TYPE: number;
    let INVALID_ARGUMENT_VALUE: number;
    let INVALID_FIELD_INDEX: number;
    let INVALID_FIELD_NAME: number;
}
