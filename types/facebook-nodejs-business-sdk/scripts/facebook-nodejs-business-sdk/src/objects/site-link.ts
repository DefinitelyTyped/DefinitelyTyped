import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SiteLink
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class SiteLink extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      link_image_hash: 'link_image_hash',
      link_title: 'link_title',
      link_type: 'link_type',
      link_url: 'link_url'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): SiteLink {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}