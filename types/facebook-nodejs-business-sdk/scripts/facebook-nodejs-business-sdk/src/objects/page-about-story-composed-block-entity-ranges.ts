import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageAboutStoryComposedBlockEntityRanges
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageAboutStoryComposedBlockEntityRanges extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      key: 'key',
      length: 'length',
      offset: 'offset'
    });
  }

}