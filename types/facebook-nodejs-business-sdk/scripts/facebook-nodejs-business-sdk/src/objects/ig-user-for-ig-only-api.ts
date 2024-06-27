import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * IGUserForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGUserForIGOnlyAPI extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_type: 'account_type',
      id: 'id',
      media_count: 'media_count',
      username: 'username'
    });
  }

  getLiveMedia(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/live_media');
  }

  getMedia(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/media');
  }

  getStories(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/stories');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGUserForIGOnlyAPI {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}