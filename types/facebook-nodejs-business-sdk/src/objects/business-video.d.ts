import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessVideo

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessVideo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessVideo>;
}
