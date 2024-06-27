import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkUserBadges
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WorkUserBadges extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      category: 'category',
      description: 'description',
      icon: 'icon',
      id: 'id',
      name: 'name'
    });
  }

}