import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AndroidAppLink
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AndroidAppLink extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      app_name: 'app_name',
      class: 'class',
      package: 'package',
      url: 'url'
    });
  }

}