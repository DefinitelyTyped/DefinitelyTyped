import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CheckBatchRequestStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CheckBatchRequestStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        errors: "errors";
        errors_total_count: "errors_total_count";
        handle: "handle";
        ids_of_invalid_requests: "ids_of_invalid_requests";
        status: "status";
        warnings: "warnings";
        warnings_total_count: "warnings_total_count";
    }>;
    static get ErrorPriority(): Readonly<{
        high: "HIGH";
        low: "LOW";
        medium: "MEDIUM";
    }>;
}
