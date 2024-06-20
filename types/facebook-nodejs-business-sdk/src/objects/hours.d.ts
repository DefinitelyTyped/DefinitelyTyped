import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Hours

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Hours extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<Hours>;
}
