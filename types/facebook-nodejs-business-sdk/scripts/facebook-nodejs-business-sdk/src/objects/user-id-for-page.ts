import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserIDForPage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class UserIDForPage extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      page: 'page'
    });
  }

}