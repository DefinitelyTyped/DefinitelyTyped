import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import DynamicARMetadata from "./dynamic-ar-metadata";
import CatalogItemChannelsToIntegrityStatus from "./catalog-item-channels-to-integrity-status";
import DynamicVideoMetadata from "./dynamic-video-metadata";
/**
 * MediaTitle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class MediaTitle extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      applinks: 'applinks',
      category_specific_fields: 'category_specific_fields',
      content_category: 'content_category',
      currency: 'currency',
      description: 'description',
      fb_page_alias: 'fb_page_alias',
      fb_page_id: 'fb_page_id',
      genres: 'genres',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      kg_fb_id: 'kg_fb_id',
      media_title_id: 'media_title_id',
      price: 'price',
      sanitized_images: 'sanitized_images',
      title: 'title',
      title_display_name: 'title_display_name',
      unit_price: 'unit_price',
      url: 'url',
      visibility: 'visibility',
      wiki_data_item: 'wiki_data_item'
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

  static get ContentCategory() {
    return Object.freeze({
      movie: 'MOVIE',
      music: 'MUSIC',
      tv_show: 'TV_SHOW'
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

  get(fields: Array<string>, params: Record<string, any> = {}): MediaTitle {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): MediaTitle {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}