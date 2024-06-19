import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FAMEKumo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FAMEKumo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): FAMEKumo;
}
