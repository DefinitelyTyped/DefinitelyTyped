import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LiveVideoInputStream
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LiveVideoInputStream extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      dash_ingest_url: 'dash_ingest_url',
      dash_preview_url: 'dash_preview_url',
      id: 'id',
      is_master: 'is_master',
      secure_stream_url: 'secure_stream_url',
      stream_health: 'stream_health',
      stream_id: 'stream_id',
      stream_url: 'stream_url'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): LiveVideoInputStream {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}