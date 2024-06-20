import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdSavedLocation

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedLocation extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdSavedLocation>;
}
