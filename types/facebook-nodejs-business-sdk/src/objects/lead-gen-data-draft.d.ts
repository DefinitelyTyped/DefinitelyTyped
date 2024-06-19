import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenDataDraft
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDataDraft extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): LeadGenDataDraft;
}
