import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedUploadErrorReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedUploadErrorReport extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      file_handle: 'file_handle',
      report_status: 'report_status'
    });
  }

}