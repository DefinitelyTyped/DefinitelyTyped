export = DataSetManagerError;
declare function DataSetManagerError(...args: any[]): void;
declare class DataSetManagerError {
    constructor(...args: any[]);
    private _name;
}
declare namespace DataSetManagerError {
    let DATASET_ALREADY_EXISTS: number;
    let DATASET_NOT_FOUND: number;
    let PENDING_DATASET: number;
    let INVALID_QUERY: number;
    let PENDING_DATASET_EXISTS: number;
}
