import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageThreadOwner
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageThreadOwner extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      thread_owner: 'thread_owner'
    });
  }

}