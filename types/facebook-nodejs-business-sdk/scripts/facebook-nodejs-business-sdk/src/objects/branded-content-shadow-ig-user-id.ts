import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandedContentShadowIGUserID
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BrandedContentShadowIGUserID extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id'
    });
  }

}