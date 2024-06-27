import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WindowsPhoneAppLink
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WindowsPhoneAppLink extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      app_id: 'app_id',
      app_name: 'app_name',
      url: 'url'
    });
  }

}