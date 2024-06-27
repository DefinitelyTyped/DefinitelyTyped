import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Comment from "./comment";
/**
 * AdgroupFacebookFeedback
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdgroupFacebookFeedback extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      preview: 'preview'
    });
  }

  getComments(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Comment, fields, params, fetchFirstPage, '/comments');
  }

}