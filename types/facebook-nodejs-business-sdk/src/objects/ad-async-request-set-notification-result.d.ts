import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAsyncRequestSetNotificationResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequestSetNotificationResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        response: "response";
        status: "status";
    }>;
}
