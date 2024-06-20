import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdTopline

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdTopline extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdTopline>;
}
