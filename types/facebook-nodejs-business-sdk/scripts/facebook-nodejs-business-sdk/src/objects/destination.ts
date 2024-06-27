import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import DynamicARMetadata from "./dynamic-ar-metadata";
import CatalogItemChannelsToIntegrityStatus from "./catalog-item-channels-to-integrity-status";
import DynamicVideoMetadata from "./dynamic-video-metadata";
/**
 * Destination
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Destination extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      category_specific_fields: 'category_specific_fields',
      currency: 'currency',
      description: 'description',
      destination_id: 'destination_id',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      name: 'name',
      price: 'price',
      price_change: 'price_change',
      sanitized_images: 'sanitized_images',
      tags: 'tags',
      types: 'types',
      unit_price: 'unit_price',
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

  getAugmentedRealitiesMetadata(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(DynamicARMetadata, fields, params, fetchFirstPage, '/augmented_realities_metadata');
  }

  getChannelsToIntegrityStatus(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CatalogItemChannelsToIntegrityStatus, fields, params, fetchFirstPage, '/channels_to_integrity_status');
  }

  getVideosMetadata(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(DynamicVideoMetadata, fields, params, fetchFirstPage, '/videos_metadata');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Destination {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}