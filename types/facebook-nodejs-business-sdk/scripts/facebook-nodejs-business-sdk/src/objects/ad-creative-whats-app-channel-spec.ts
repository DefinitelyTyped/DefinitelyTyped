import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeWhatsAppChannelSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeWhatsAppChannelSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      channel_id: 'channel_id',
      channel_url: 'channel_url'
    });
  }

}