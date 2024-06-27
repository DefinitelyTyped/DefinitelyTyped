import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlatformImageSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PlatformImageSource extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      height: 'height',
      source: 'source',
      width: 'width'
    });
  }

}