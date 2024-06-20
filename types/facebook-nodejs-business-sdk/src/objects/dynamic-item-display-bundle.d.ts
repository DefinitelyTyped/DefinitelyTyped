import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicItemDisplayBundle

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundle extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicItemDisplayBundle>;
}
