import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import InstagramComment from "./instagram-comment";
/**
 * InstagramCarousel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class InstagramCarousel extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      caption_text: 'caption_text',
      comment_count: 'comment_count',
      content_type: 'content_type',
      display_url: 'display_url',
      id: 'id',
      like_count: 'like_count',
      owner_instagram_user: 'owner_instagram_user',
      permalink: 'permalink',
      taken_at: 'taken_at',
      video_url: 'video_url'
    });
  }

  getComments(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(InstagramComment, fields, params, fetchFirstPage, '/comments');
  }

  createComment(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<InstagramComment> {
    return this.createEdge('/comments', fields, params, InstagramComment, pathOverride);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): InstagramCarousel {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}