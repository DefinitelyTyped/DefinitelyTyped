import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Comment from "./comment";
import Profile from "./profile";
/**
 * Link
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Link extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      caption: 'caption',
      created_time: 'created_time',
      description: 'description',
      from: 'from',
      icon: 'icon',
      id: 'id',
      link: 'link',
      message: 'message',
      multi_share_optimized: 'multi_share_optimized',
      name: 'name',
      privacy: 'privacy',
      via: 'via'
    });
  }

  createComment(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Comment> {
    return this.createEdge('/comments', fields, params, Comment, pathOverride);
  }

  getLikes(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Profile, fields, params, fetchFirstPage, '/likes');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Link {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}