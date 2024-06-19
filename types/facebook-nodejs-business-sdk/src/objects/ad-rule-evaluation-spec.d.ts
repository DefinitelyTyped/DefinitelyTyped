import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleEvaluationSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleEvaluationSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get EvaluationType(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdRuleEvaluationSpec;
}
