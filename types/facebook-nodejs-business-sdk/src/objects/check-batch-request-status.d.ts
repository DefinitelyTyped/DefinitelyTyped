import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CheckBatchRequestStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CheckBatchRequestStatus extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
}
