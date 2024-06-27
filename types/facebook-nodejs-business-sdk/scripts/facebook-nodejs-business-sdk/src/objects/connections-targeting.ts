import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ConnectionsTargeting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ConnectionsTargeting extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

}