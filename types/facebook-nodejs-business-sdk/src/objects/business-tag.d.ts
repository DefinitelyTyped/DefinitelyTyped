import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessTag

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessTag extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessTag>;
}
