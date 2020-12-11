import { ODataBatch } from "@pnp/odata";
export interface IObjectPathBatch extends ODataBatch {
}
/**
 * Implements ODataBatch for use with the ObjectPath framework
 */
export declare class ObjectPathBatch extends ODataBatch implements IObjectPathBatch {
    protected parentUrl: string;
    constructor(parentUrl: string, _batchId?: string);
    protected executeImpl(): Promise<void>;
}
