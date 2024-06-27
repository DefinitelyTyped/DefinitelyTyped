import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import IGBoostMediaAd from "./ig-boost-media-ad";
import BrandedContentShadowIGUserID from "./branded-content-shadow-ig-user-id";
import ShadowIGMediaCollaborators from "./shadow-ig-media-collaborators";
import IGComment from "./ig-comment";
import InstagramInsightsResult from "./instagram-insights-result";
import ShadowIGMediaProductTags from "./shadow-ig-media-product-tags";
/**
 * IGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGMedia extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      boost_eligibility_info: 'boost_eligibility_info',
      caption: 'caption',
      comments_count: 'comments_count',
      copyright_check_information: 'copyright_check_information',
      id: 'id',
      ig_id: 'ig_id',
      is_comment_enabled: 'is_comment_enabled',
      is_shared_to_feed: 'is_shared_to_feed',
      like_count: 'like_count',
      media_product_type: 'media_product_type',
      media_type: 'media_type',
      media_url: 'media_url',
      owner: 'owner',
      permalink: 'permalink',
      shortcode: 'shortcode',
      thumbnail_url: 'thumbnail_url',
      timestamp: 'timestamp',
      username: 'username'
    });
  }

  getBoostAdsList(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGBoostMediaAd, fields, params, fetchFirstPage, '/boost_ads_list');
  }

  getBrandedContentPartnerPromote(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BrandedContentShadowIGUserID, fields, params, fetchFirstPage, '/branded_content_partner_promote');
  }

  createBrandedContentPartnerPromote(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<BrandedContentShadowIGUserID> {
    return this.createEdge('/branded_content_partner_promote', fields, params, BrandedContentShadowIGUserID, pathOverride);
  }

  getChildren(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGMedia, fields, params, fetchFirstPage, '/children');
  }

  getCollaborators(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ShadowIGMediaCollaborators, fields, params, fetchFirstPage, '/collaborators');
  }

  getComments(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGComment, fields, params, fetchFirstPage, '/comments');
  }

  createComment(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<IGComment> {
    return this.createEdge('/comments', fields, params, IGComment, pathOverride);
  }

  getInsights(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(InstagramInsightsResult, fields, params, fetchFirstPage, '/insights');
  }

  deleteProductTags(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/product_tags', params);
  }

  getProductTags(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ShadowIGMediaProductTags, fields, params, fetchFirstPage, '/product_tags');
  }

  createProductTag(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ShadowIGMediaProductTags> {
    return this.createEdge('/product_tags', fields, params, ShadowIGMediaProductTags, pathOverride);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGMedia {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): IGMedia {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}