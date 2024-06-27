import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedUploadProgress
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedUploadProgress extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      pos: 'pos',
      size: 'size',
      step: 'step',
      unit: 'unit',
      updated_time: 'updated_time'
    });
  }

}