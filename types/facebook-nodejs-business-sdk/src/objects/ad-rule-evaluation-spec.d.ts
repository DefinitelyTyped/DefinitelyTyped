import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleEvaluationSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleEvaluationSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        evaluation_type: "evaluation_type";
        filters: "filters";
        trigger: "trigger";
        id: "id";
    }>;
    static get EvaluationType(): Readonly<{
        schedule: "SCHEDULE";
        trigger: "TRIGGER";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<AdRuleEvaluationSpec>;
}
