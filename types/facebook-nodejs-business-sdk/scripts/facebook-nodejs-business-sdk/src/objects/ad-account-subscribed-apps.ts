import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountSubscribedApps
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountSubscribedApps extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      app_id: 'app_id',
      app_name: 'app_name'
    });
  }

}