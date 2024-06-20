import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightAdgroup

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightAdgroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdLightAdgroup>;
}
