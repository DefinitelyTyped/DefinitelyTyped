import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeSiteLinksSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeSiteLinksSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      site_link_title: 'site_link_title',
      site_link_url: 'site_link_url'
    });
  }

}