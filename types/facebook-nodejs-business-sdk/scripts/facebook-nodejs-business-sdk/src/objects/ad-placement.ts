import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdPlacement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdPlacement extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      bundle_id: 'bundle_id',
      display_format: 'display_format',
      external_placement_id: 'external_placement_id',
      google_display_format: 'google_display_format',
      id: 'id',
      name: 'name',
      placement_group: 'placement_group',
      platform: 'platform',
      status: 'status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdPlacement {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}