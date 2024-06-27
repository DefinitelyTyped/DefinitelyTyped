import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageAboutStoryComposedBlockInlineStyle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageAboutStoryComposedBlockInlineStyle extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      length: 'length',
      offset: 'offset',
      style: 'style'
    });
  }

}