import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SavedAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedAudience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): SavedAudience;
}
