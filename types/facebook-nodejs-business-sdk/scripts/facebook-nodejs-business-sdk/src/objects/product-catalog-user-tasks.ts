import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogUserTasks
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogUserTasks extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      business: 'business',
      tasks: 'tasks'
    });
  }

}