import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageVideosYouCanUse
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageVideosYouCanUse extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      description: 'description',
      id: 'id',
      title: 'title'
    });
  }

}