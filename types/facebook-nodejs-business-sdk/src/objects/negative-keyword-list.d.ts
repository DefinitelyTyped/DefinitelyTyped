import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * NegativeKeywordList

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NegativeKeywordList extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<NegativeKeywordList>;    get(fields: string[], params?: Record<string, any>): Promise<NegativeKeywordList>;
}
