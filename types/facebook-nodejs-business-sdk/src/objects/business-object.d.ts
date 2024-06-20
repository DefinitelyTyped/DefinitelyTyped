import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessObject

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessObject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
