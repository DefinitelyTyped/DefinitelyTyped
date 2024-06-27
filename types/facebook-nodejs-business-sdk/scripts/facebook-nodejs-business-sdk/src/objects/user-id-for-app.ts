import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserIDForApp
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class UserIDForApp extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      app: 'app',
      id: 'id'
    });
  }

}