import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataMoment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeLinkDataMoment extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      type: 'type'
    });
  }

  static get Type() {
    return Object.freeze({
      fb_live_shopping: 'FB_LIVE_SHOPPING',
      ig_drops: 'IG_DROPS',
      ig_live_shopping: 'IG_LIVE_SHOPPING'
    });
  }

}