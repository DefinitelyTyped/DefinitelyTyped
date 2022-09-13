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
        const NOT_FOUND: number;
        const PERMISSION_DENIED: number;
        const FIELD_NOT_FOUND: number;
        const FIELD_TYPE_NOT_SUPPORTED: number;
        const READ_ONLY_FIELD: number;
        const MISSING_FIELD: number;
        const INVALID_CLASS_KEY: number;
        const POSITION_CHANGED: number;
        const EMPTY_DATASET: number;
        const CLASS_IS_JUST_TO_GROUP: number;
        const HAS_DETAIL_ENTITIES: number;
        const INVALID_KEY: number;
    }
    type Codes = number;
}
