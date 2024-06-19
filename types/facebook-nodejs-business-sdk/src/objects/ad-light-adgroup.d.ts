import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightAdgroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightAdgroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdLightAdgroup;
}
