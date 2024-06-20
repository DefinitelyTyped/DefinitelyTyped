import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageBroadcast

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageBroadcast extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PageBroadcast>;
}
