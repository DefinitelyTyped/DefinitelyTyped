import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenDraftQuestion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LeadGenDraftQuestion extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      conditional_questions_choices: 'conditional_questions_choices',
      conditional_questions_group_id: 'conditional_questions_group_id',
      dependent_conditional_questions: 'dependent_conditional_questions',
      inline_context: 'inline_context',
      key: 'key',
      label: 'label',
      options: 'options',
      type: 'type'
    });
  }

}