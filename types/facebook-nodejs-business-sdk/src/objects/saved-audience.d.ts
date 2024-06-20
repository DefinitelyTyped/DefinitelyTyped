import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SavedAudience

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedAudience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<SavedAudience>;
}
