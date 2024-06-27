import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import CatalogItemChannelsToIntegrityStatus from "./catalog-item-channels-to-integrity-status";
/**
 * LocalServiceBusiness
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LocalServiceBusiness extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      availability: 'availability',
      brand: 'brand',
      category: 'category',
      category_specific_fields: 'category_specific_fields',
      condition: 'condition',
      cuisine_type: 'cuisine_type',
      currency: 'currency',
      custom_label_0: 'custom_label_0',
      custom_label_1: 'custom_label_1',
      custom_label_2: 'custom_label_2',
      custom_label_3: 'custom_label_3',
      custom_label_4: 'custom_label_4',
      custom_number_0: 'custom_number_0',
      custom_number_1: 'custom_number_1',
      custom_number_2: 'custom_number_2',
      custom_number_3: 'custom_number_3',
      custom_number_4: 'custom_number_4',
      description: 'description',
      expiration_date: 'expiration_date',
      gtin: 'gtin',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      local_info: 'local_info',
      local_service_business_id: 'local_service_business_id',
      main_local_info: 'main_local_info',
      phone: 'phone',
      price: 'price',
      price_range: 'price_range',
      retailer_category: 'retailer_category',
      sanitized_images: 'sanitized_images',
      size: 'size',
      tags: 'tags',
      title: 'title',
      unit_price: 'unit_price',
      url: 'url',
      vendor_id: 'vendor_id',
      visibility: 'visibility'
    });
  }

  static get Availability() {
    return Object.freeze({
      available_for_order: 'AVAILABLE_FOR_ORDER',
      discontinued: 'DISCONTINUED',
      in_stock: 'IN_STOCK',
      mark_as_sold: 'MARK_AS_SOLD',
      out_of_stock: 'OUT_OF_STOCK',
      pending: 'PENDING',
      preorder: 'PREORDER'
    });
  }

  static get Condition() {
    return Object.freeze({
      pc_cpo: 'PC_CPO',
      pc_new: 'PC_NEW',
      pc_open_box_new: 'PC_OPEN_BOX_NEW',
      pc_refurbished: 'PC_REFURBISHED',
      pc_used: 'PC_USED',
      pc_used_fair: 'PC_USED_FAIR',
      pc_used_good: 'PC_USED_GOOD',
      pc_used_like_new: 'PC_USED_LIKE_NEW'
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

  get(fields: Array<string>, params: Record<string, any> = {}): LocalServiceBusiness {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}