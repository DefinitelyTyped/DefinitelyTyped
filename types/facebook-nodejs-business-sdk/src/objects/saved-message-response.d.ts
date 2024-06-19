import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SavedMessageResponse
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedMessageResponse extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): SavedMessageResponse;
}
