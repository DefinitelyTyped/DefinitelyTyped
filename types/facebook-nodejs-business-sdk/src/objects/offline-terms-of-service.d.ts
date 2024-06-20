import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OfflineTermsOfService

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineTermsOfService extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<OfflineTermsOfService>;
}
