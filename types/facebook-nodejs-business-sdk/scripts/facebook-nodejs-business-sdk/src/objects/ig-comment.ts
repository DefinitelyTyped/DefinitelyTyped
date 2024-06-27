import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * IGComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGComment extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      from: 'from',
      hidden: 'hidden',
      id: 'id',
      like_count: 'like_count',
      media: 'media',
      parent_id: 'parent_id',
      text: 'text',
      timestamp: 'timestamp',
      user: 'user',
      username: 'username'
    });
  }

  getReplies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGComment, fields, params, fetchFirstPage, '/replies');
  }

  createReply(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<IGComment> {
    return this.createEdge('/replies', fields, params, IGComment, pathOverride);
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGComment {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): IGComment {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}