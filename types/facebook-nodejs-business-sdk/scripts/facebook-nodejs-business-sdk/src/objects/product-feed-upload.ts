import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import ProductFeedUploadError from "./product-feed-upload-error";
/**
 * ProductFeedUpload
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedUpload extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      end_time: 'end_time',
      error_count: 'error_count',
      error_report: 'error_report',
      filename: 'filename',
      id: 'id',
      input_method: 'input_method',
      num_deleted_items: 'num_deleted_items',
      num_detected_items: 'num_detected_items',
      num_invalid_items: 'num_invalid_items',
      num_persisted_items: 'num_persisted_items',
      start_time: 'start_time',
      url: 'url',
      warning_count: 'warning_count'
    });
  }

  static get InputMethod() {
    return Object.freeze({
      google_sheets_fetch: 'Google Sheets Fetch',
      manual_upload: 'Manual Upload',
      reupload_last_file: 'Reupload Last File',
      server_fetch: 'Server Fetch',
      user_initiated_server_fetch: 'User initiated server fetch'
    });
  }

  createErrorReport(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ProductFeedUpload> {
    return this.createEdge('/error_report', fields, params, ProductFeedUpload, pathOverride);
  }

  getErrors(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductFeedUploadError, fields, params, fetchFirstPage, '/errors');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductFeedUpload {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}