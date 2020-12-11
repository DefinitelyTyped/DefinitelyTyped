import { ODataBatch } from "@pnp/odata";
/**
 * Manages a batch of OData operations
 */
export declare class SPBatch extends ODataBatch {
    private baseUrl;
    constructor(baseUrl: string);
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    static ParseResponse(body: string): Promise<Response[]>;
    protected executeImpl(): Promise<void>;
}
