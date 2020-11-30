import { IFetchOptions } from "../common";
import { IODataParser } from "./parsers";
import { IQueryable } from "./queryable";
import { IRequestContext } from "./pipeline";
export interface IODataBatchRequestInfo {
    url: string;
    method: string;
    options: IFetchOptions;
    parser: IODataParser<any>;
    resolve: ((d: any) => void) | null;
    reject: ((error: any) => void) | null;
    id: string;
    index: number;
}
export declare abstract class Batch {
    private _batchId;
    protected _deps: Promise<void>[];
    protected _reqs: IODataBatchRequestInfo[];
    protected _rDeps: Promise<void>[];
    private _index;
    constructor(_batchId?: string);
    get batchId(): string;
    /**
     * The requests contained in this batch
     */
    protected get requests(): IODataBatchRequestInfo[];
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    track(batchee: IQueryable<any>): void;
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    add<T = any>(context: IRequestContext<T>): Promise<T>;
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    addDependency(): () => void;
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    addResolveBatchDependency(p: Promise<any>): void;
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    execute(): Promise<void>;
    protected abstract executeImpl(): Promise<void>;
}
//# sourceMappingURL=batch.d.ts.map