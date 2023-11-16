import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleEvaluationSpec
 * @extends AbstractCrudObject
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
    get(fields: Array<string>, params?: Record<any, any>): AdRuleEvaluationSpec;
}
