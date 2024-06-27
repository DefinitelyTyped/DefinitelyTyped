import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import IGMedia from "./ig-media";
/**
 * ShadowIGHashtag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ShadowIGHashtag extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

  getRecentMedia(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGMedia, fields, params, fetchFirstPage, '/recent_media');
  }

  getTopMedia(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGMedia, fields, params, fetchFirstPage, '/top_media');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ShadowIGHashtag {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}