import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdPlacement

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdPlacement>;
}
