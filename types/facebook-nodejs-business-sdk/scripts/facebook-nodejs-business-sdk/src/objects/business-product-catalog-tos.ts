import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessProductCatalogTOS
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessProductCatalogTOS extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      accepted: 'accepted',
      content: 'content'
    });
  }

}