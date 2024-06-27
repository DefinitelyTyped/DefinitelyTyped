import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ResearchPollStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ResearchPollStudy extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account: 'account',
      id: 'id',
      name: 'name'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ResearchPollStudy {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}