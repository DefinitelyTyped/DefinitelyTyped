import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EducationExperience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class EducationExperience extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      classes: 'classes',
      concentration: 'concentration',
      degree: 'degree',
      id: 'id',
      school: 'school',
      type: 'type',
      with: 'with',
      year: 'year'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): EducationExperience {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}