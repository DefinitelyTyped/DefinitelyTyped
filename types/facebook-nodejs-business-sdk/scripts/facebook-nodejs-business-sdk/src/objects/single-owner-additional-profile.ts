import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SingleOwnerAdditionalProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class SingleOwnerAdditionalProfile extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name',
      user_name: 'user_name'
    });
  }

}