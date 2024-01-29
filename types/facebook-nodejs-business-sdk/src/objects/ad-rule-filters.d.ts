import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleFilters
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleFilters extends AbstractCrudObject {
    static get Fields(): Readonly<{
        field: "field";
        operator: "operator";
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
}
