import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleEvaluationSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdRuleEvaluationSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      evaluation_type: 'evaluation_type',
      filters: 'filters',
      trigger: 'trigger',
      id: 'id'
    });
  }

  static get EvaluationType() {
    return Object.freeze({
      schedule: 'SCHEDULE',
      trigger: 'TRIGGER'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdRuleEvaluationSpec {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}