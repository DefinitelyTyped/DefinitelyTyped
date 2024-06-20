import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleEvaluationSpec

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleEvaluationSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get EvaluationType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdRuleEvaluationSpec>;
}
