import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EntityAtTextRange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class EntityAtTextRange extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      length: 'length',
      name: 'name',
      object: 'object',
      offset: 'offset',
      type: 'type'
    });
  }

  static get Type() {
    return Object.freeze({
      application: 'application',
      event: 'event',
      group: 'group',
      page: 'page',
      user: 'user'
    });
  }

}