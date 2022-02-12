export = DataSetManagerError;
declare function DataSetManagerError(...args: any[]): void;
declare class DataSetManagerError {
    constructor(...args: any[]);
    private _name;
}
declare namespace DataSetManagerError {
    const DATASET_ALREADY_EXISTS: number;
    const DATASET_NOT_FOUND: number;
    const PENDING_DATASET: number;
    const INVALID_QUERY: number;
    const PENDING_DATASET_EXISTS: number;
}
