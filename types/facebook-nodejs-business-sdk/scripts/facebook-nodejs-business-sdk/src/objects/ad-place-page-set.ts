import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdPlacePageSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdPlacePageSet extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_id: 'account_id',
      id: 'id',
      location_types: 'location_types',
      name: 'name',
      pages_count: 'pages_count',
      parent_page: 'parent_page'
    });
  }

  static get LocationTypes() {
    return Object.freeze({
      home: 'home',
      recent: 'recent'
    });
  }

  static get TargetedAreaType() {
    return Object.freeze({
      custom_radius: 'CUSTOM_RADIUS',
      marketing_area: 'MARKETING_AREA',
      none: 'NONE'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdPlacePageSet {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}