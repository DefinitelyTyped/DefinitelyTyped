import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AsyncRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AsyncRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get Type(): Record<string, any>;
}
