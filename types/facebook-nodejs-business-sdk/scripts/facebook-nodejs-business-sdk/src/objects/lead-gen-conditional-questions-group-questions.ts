import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenConditionalQuestionsGroupQuestions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LeadGenConditionalQuestionsGroupQuestions extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      field_key: 'field_key',
      input_type: 'input_type',
      name: 'name'
    });
  }

}