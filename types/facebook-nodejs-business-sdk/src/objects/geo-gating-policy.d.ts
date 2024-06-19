import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * GeoGatingPolicy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GeoGatingPolicy extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): GeoGatingPolicy;
}
