import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleTrigger
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleTrigger extends AbstractCrudObject {
    static get Fields(): Readonly<{
        field: "field";
        operator: "operator";
        type: "type";
        value: "value";
    }>;
    static get Operator(): Readonly<{
        all: "ALL";
        any: "ANY";
        contain: "CONTAIN";
        equal: "EQUAL";
        greater_than: "GREATER_THAN";
        in: "IN";
        in_range: "IN_RANGE";
        less_than: "LESS_THAN";
        none: "NONE";
        not_contain: "NOT_CONTAIN";
        not_equal: "NOT_EQUAL";
        not_in: "NOT_IN";
        not_in_range: "NOT_IN_RANGE";
    }>;
    static get Type(): Readonly<{
        delivery_insights_change: "DELIVERY_INSIGHTS_CHANGE";
        metadata_creation: "METADATA_CREATION";
        metadata_update: "METADATA_UPDATE";
        stats_change: "STATS_CHANGE";
        stats_milestone: "STATS_MILESTONE";
    }>;
}
