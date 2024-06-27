import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * ProductFeedRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedRule extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      attribute: 'attribute',
      id: 'id',
      params: 'params',
      rule_type: 'rule_type'
    });
  }

  static get RuleType() {
    return Object.freeze({
      fallback_rule: 'fallback_rule',
      letter_case_rule: 'letter_case_rule',
      mapping_rule: 'mapping_rule',
      regex_replace_rule: 'regex_replace_rule',
      value_mapping_rule: 'value_mapping_rule'
    });
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductFeedRule {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): ProductFeedRule {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}