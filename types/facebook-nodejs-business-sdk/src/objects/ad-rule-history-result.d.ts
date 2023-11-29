import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleHistoryResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleHistoryResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
        object_id: "object_id";
        object_type: "object_type";
    }>;
    static get ObjectType(): Readonly<{
        ad: "AD";
        adset: "ADSET";
        campaign: "CAMPAIGN";
    }>;
}
