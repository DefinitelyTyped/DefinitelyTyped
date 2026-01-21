export = DataSetManagerError;
/**
 * Classe de erro utilizada por DataSetManager.
 * @constructor
 * @extends FatalError
 */
declare function DataSetManagerError(...args: any[]): void;
declare class DataSetManagerError {
    /**
     * Classe de erro utilizada por DataSetManager.
     * @constructor
     * @extends FatalError
     */
    constructor(...args: any[]);
    /** @private */
    private _name;
}
declare namespace DataSetManagerError {
    let DATASET_ALREADY_EXISTS: number;
    let DATASET_NOT_FOUND: number;
    let PENDING_DATASET: number;
    let INVALID_QUERY: number;
    let PENDING_DATASET_EXISTS: number;
}
