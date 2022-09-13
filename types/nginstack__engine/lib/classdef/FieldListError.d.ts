export = FieldListError;
declare function FieldListError(...args: any[]): void;
declare class FieldListError {
    constructor(...args: any[]);
    private _name;
}
declare namespace FieldListError {
    const DOUBLE_ADD: number;
    const INVALID_PROPERTY_NAME: number;
    const INVALID_ARGUMENTS_LENGTH: number;
    const INVALID_ARGUMENT_TYPE: number;
    const INVALID_ARGUMENT_VALUE: number;
    const INVALID_FIELD_INDEX: number;
    const INVALID_FIELD_NAME: number;
}
