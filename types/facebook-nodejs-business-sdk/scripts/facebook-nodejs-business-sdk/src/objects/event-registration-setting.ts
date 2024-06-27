import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventRegistrationSetting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class EventRegistrationSetting extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      questions: 'questions',
      target_type: 'target_type',
      ticket_tier_ids: 'ticket_tier_ids'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): EventRegistrationSetting {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}