import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import CatalogItemChannelsToIntegrityStatus from "./catalog-item-channels-to-integrity-status";
/**
 * LocationBasedItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LocationBasedItem extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      applinks: 'applinks',
      category_specific_fields: 'category_specific_fields',
      currency: 'currency',
      description: 'description',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      location_based_item_id: 'location_based_item_id',
      name: 'name',
      price: 'price',
      sanitized_images: 'sanitized_images',
      url: 'url',
      visibility: 'visibility'
    });
  }

  static get ImageFetchStatus() {
    return Object.freeze({
      direct_upload: 'DIRECT_UPLOAD',
      fetched: 'FETCHED',
      fetch_failed: 'FETCH_FAILED',
      no_status: 'NO_STATUS',
      outdated: 'OUTDATED',
      partial_fetch: 'PARTIAL_FETCH'
    });
  }

  static get Visibility() {
    return Object.freeze({
      published: 'PUBLISHED',
      staging: 'STAGING'
    });
  }

  getChannelsToIntegrityStatus(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CatalogItemChannelsToIntegrityStatus, fields, params, fetchFirstPage, '/channels_to_integrity_status');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): LocationBasedItem {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}