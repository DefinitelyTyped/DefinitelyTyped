import { Batch } from "@pnp/odata";
export declare class GraphBatch extends Batch {
    private batchUrl;
    private maxRequests;
    constructor(batchUrl?: string, maxRequests?: number);
    /**
     * Urls come to the batch absolute, but the processor expects relative
     * @param url Url to ensure is relative
     */
    private static makeUrlRelative;
    private static formatRequests;
    private static parseResponse;
    protected executeImpl(): Promise<void>;
}
//# sourceMappingURL=batch.d.ts.map