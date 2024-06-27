import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkExperience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WorkExperience extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      description: 'description',
      employer: 'employer',
      end_date: 'end_date',
      from: 'from',
      id: 'id',
      location: 'location',
      position: 'position',
      projects: 'projects',
      start_date: 'start_date',
      with: 'with'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WorkExperience {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}