import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import DynamicARMetadata from "./dynamic-ar-metadata";
import CatalogItemChannelsToIntegrityStatus from "./catalog-item-channels-to-integrity-status";
import DynamicVideoMetadata from "./dynamic-video-metadata";
/**
 * HomeListing
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class HomeListing extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ac_type: 'ac_type',
      additional_fees_description: 'additional_fees_description',
      address: 'address',
      agent_company: 'agent_company',
      agent_email: 'agent_email',
      agent_fb_page_id: 'agent_fb_page_id',
      agent_name: 'agent_name',
      agent_phone: 'agent_phone',
      applinks: 'applinks',
      area_size: 'area_size',
      area_unit: 'area_unit',
      availability: 'availability',
      category_specific_fields: 'category_specific_fields',
      co_2_emission_rating_eu: 'co_2_emission_rating_eu',
      currency: 'currency',
      days_on_market: 'days_on_market',
      description: 'description',
      energy_rating_eu: 'energy_rating_eu',
      furnish_type: 'furnish_type',
      group_id: 'group_id',
      heating_type: 'heating_type',
      home_listing_id: 'home_listing_id',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      laundry_type: 'laundry_type',
      listing_type: 'listing_type',
      max_currency: 'max_currency',
      max_price: 'max_price',
      min_currency: 'min_currency',
      min_price: 'min_price',
      name: 'name',
      num_baths: 'num_baths',
      num_beds: 'num_beds',
      num_rooms: 'num_rooms',
      num_units: 'num_units',
      parking_type: 'parking_type',
      partner_verification: 'partner_verification',
      pet_policy: 'pet_policy',
      price: 'price',
      property_type: 'property_type',
      sanitized_images: 'sanitized_images',
      unit_price: 'unit_price',
      url: 'url',
      visibility: 'visibility',
      year_built: 'year_built'
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

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): HomeListing {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): HomeListing {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}