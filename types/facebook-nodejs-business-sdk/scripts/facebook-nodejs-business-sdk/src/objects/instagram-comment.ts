import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * InstagramComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class InstagramComment extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      comment_type: 'comment_type',
      created_at: 'created_at',
      id: 'id',
      instagram_comment_id: 'instagram_comment_id',
      instagram_user: 'instagram_user',
      mentioned_instagram_users: 'mentioned_instagram_users',
      message: 'message',
      username: 'username'
    });
  }

  getReplies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(InstagramComment, fields, params, fetchFirstPage, '/replies');
  }

  createReply(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<InstagramComment> {
    return this.createEdge('/replies', fields, params, InstagramComment, pathOverride);
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): InstagramComment {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): InstagramComment {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}