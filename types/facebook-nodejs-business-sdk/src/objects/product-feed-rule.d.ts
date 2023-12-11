import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * ProductFeedRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attribute: "attribute";
        id: "id";
        params: "params";
        rule_type: "rule_type";
    }>;
    static get RuleType(): Readonly<{
        fallback_rule: "fallback_rule";
        letter_case_rule: "letter_case_rule";
        mapping_rule: "mapping_rule";
        regex_replace_rule: "regex_replace_rule";
        value_mapping_rule: "value_mapping_rule";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductFeedRule>;
    update(fields: string[], params?: Record<any, any>): Promise<ProductFeedRule>;
}
