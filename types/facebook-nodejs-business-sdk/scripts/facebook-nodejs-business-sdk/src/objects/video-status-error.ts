import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatusError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoStatusError extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      code: 'code',
      message: 'message'
    });
  }

}