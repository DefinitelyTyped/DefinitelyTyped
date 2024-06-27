import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoTextQuestion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoTextQuestion extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      question_target_id: 'question_target_id',
      question_text: 'question_text',
      status: 'status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): VideoTextQuestion {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}