import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdColumnSizes

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdColumnSizes extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdColumnSizes>;
}
