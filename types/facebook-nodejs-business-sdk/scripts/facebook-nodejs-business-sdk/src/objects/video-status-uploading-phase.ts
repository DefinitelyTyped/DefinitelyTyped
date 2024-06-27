import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatusUploadingPhase
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoStatusUploadingPhase extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      bytes_transferred: 'bytes_transferred',
      errors: 'errors',
      source_file_size: 'source_file_size',
      status: 'status'
    });
  }

}