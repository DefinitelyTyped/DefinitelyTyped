import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppOptimizedCustomEvents
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AppOptimizedCustomEvents extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      app_id: 'app_id',
      app_name: 'app_name',
      event_names: 'event_names'
    });
  }

}