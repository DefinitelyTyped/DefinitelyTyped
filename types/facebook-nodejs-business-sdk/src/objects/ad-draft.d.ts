import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdDraft

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdDraft extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdDraft>;
}
