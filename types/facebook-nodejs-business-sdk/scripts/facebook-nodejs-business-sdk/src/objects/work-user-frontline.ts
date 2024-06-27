import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkUserFrontline
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WorkUserFrontline extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      has_access: 'has_access',
      is_frontline: 'is_frontline'
    });
  }

}