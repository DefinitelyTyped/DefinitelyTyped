import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessProject

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessProject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessProject>;
}
