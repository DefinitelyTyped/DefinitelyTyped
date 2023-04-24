import { AbstractCrudObject } from './../abstract-crud-object';
export default class AdRuleEvaluationSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get EvaluationType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdRuleEvaluationSpec>;
}
