export = EntityError;
declare function EntityError(
    error: string,
    opt_solution?: string,
    opt_details?: string,
    opt_code?: number,
    opt_fields?: string[] | string,
    ...args: any[]
): void;
declare class EntityError {
    constructor(
        error: string,
        opt_solution?: string,
        opt_details?: string,
        opt_code?: number,
        opt_fields?: string[] | string,
        ...args: any[]
    );
    private _name;
    fields: string[];
}
declare namespace EntityError {
    namespace Codes {
        let NOT_FOUND: number;
        let PERMISSION_DENIED: number;
        let FIELD_NOT_FOUND: number;
        let FIELD_TYPE_NOT_SUPPORTED: number;
        let READ_ONLY_FIELD: number;
        let MISSING_FIELD: number;
        let INVALID_CLASS_KEY: number;
        let POSITION_CHANGED: number;
        let EMPTY_DATASET: number;
        let CLASS_IS_JUST_TO_GROUP: number;
        let HAS_DETAIL_ENTITIES: number;
        let INVALID_KEY: number;
    }
    type Codes = number;
}
