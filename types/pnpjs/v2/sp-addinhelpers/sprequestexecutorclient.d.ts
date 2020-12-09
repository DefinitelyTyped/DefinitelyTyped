import { IHttpClientImpl } from "@pnp/common";
/**
 * Makes requests using the SP.RequestExecutor library.
 */
export declare class SPRequestExecutorClient implements IHttpClientImpl {
    /**
     * Fetches a URL using the SP.RequestExecutor library.
     */
    fetch(url: string, options: any): Promise<Response>;
    /**
     * Converts a SharePoint REST API response to a fetch API response.
     */
    private convertToResponse;
}
//# sourceMappingURL=sprequestexecutorclient.d.ts.map