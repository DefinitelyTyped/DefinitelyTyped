import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeStaticFallbackSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeStaticFallbackSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      call_to_action: 'call_to_action',
      description: 'description',
      image_hash: 'image_hash',
      link: 'link',
      message: 'message',
      name: 'name'
    });
  }

}