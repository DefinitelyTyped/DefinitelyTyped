import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductFeedRuleSuggestion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRuleSuggestion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attribute: "attribute";
        params: "params";
        type: "type";
    }>;
}
