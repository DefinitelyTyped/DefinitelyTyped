import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * IGMediaForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGMediaForIGOnlyAPI extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      caption: 'caption',
      id: 'id',
      is_shared_to_feed: 'is_shared_to_feed',
      like_count: 'like_count',
      media_product_type: 'media_product_type',
      media_type: 'media_type',
      media_url: 'media_url',
      owner: 'owner',
      permalink: 'permalink',
      shortcode: 'shortcode',
      thumbnail_url: 'thumbnail_url',
      timestamp: 'timestamp',
      username: 'username'
    });
  }

  getChildren(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/children');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGMediaForIGOnlyAPI {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}