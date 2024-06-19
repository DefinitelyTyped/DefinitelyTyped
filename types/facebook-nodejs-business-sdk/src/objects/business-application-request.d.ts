import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessApplicationRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessApplicationRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
