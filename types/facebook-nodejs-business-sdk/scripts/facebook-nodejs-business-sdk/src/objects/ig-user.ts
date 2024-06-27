import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import UserAvailableCatalogs from "./user-available-catalogs";
import IGBCAdsPermission from "./igbc-ads-permission";
import BrandedContentShadowIGMediaID from "./branded-content-shadow-ig-media-id";
import BrandedContentShadowIGUserID from "./branded-content-shadow-ig-user-id";
import ShadowIGUserCatalogProductSearch from "./shadow-ig-user-catalog-product-search";
import ContentPublishingLimitResponse from "./content-publishing-limit-response";
import AdsPixel from "./ads-pixel";
import InstagramInsightsResult from "./instagram-insights-result";
import IGMedia from "./ig-media";
import UserPageOneTimeOptInTokenSettings from "./user-page-one-time-opt-in-token-settings";
import IGShoppingProductAppeal from "./ig-shopping-product-appeal";
import ShadowIGHashtag from "./shadow-ig-hashtag";
/**
 * IGUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGUser extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      biography: 'biography',
      business_discovery: 'business_discovery',
      followers_count: 'followers_count',
      follows_count: 'follows_count',
      id: 'id',
      ig_id: 'ig_id',
      media_count: 'media_count',
      mentioned_comment: 'mentioned_comment',
      mentioned_media: 'mentioned_media',
      name: 'name',
      owner_business: 'owner_business',
      profile_picture_url: 'profile_picture_url',
      shopping_product_tag_eligibility: 'shopping_product_tag_eligibility',
      shopping_review_status: 'shopping_review_status',
      username: 'username',
      website: 'website'
    });
  }

  getAvailableCatalogs(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(UserAvailableCatalogs, fields, params, fetchFirstPage, '/available_catalogs');
  }

  getBrandedContentAdPermissions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGBCAdsPermission, fields, params, fetchFirstPage, '/branded_content_ad_permissions');
  }

  createBrandedContentAdPermission(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<IGBCAdsPermission> {
    return this.createEdge('/branded_content_ad_permissions', fields, params, IGBCAdsPermission, pathOverride);
  }

  getBrandedContentAdvertisableMedias(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BrandedContentShadowIGMediaID, fields, params, fetchFirstPage, '/branded_content_advertisable_medias');
  }

  deleteBrandedContentTagApproval(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/branded_content_tag_approval', params);
  }

  getBrandedContentTagApproval(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BrandedContentShadowIGUserID, fields, params, fetchFirstPage, '/branded_content_tag_approval');
  }

  createBrandedContentTagApproval(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<BrandedContentShadowIGUserID> {
    return this.createEdge('/branded_content_tag_approval', fields, params, BrandedContentShadowIGUserID, pathOverride);
  }

  getCatalogProductSearch(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ShadowIGUserCatalogProductSearch, fields, params, fetchFirstPage, '/catalog_product_search');
  }

  getContentPublishingLimit(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ContentPublishingLimitResponse, fields, params, fetchFirstPage, '/content_publishing_limit');
  }

  getDataSet(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsPixel, fields, params, fetchFirstPage, '/dataset');
  }

  createDataSet(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdsPixel> {
    return this.createEdge('/dataset', fields, params, AdsPixel, pathOverride);
  }

  getInsights(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(InstagramInsightsResult, fields, params, fetchFirstPage, '/insights');
  }

  getLiveMedia(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGMedia, fields, params, fetchFirstPage, '/live_media');
  }

  getMedia(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGMedia, fields, params, fetchFirstPage, '/media');
  }

  createMedia(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<IGMedia> {
    return this.createEdge('/media', fields, params, IGMedia, pathOverride);
  }

  createMediaPublish(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<IGMedia> {
    return this.createEdge('/media_publish', fields, params, IGMedia, pathOverride);
  }

  createMention(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/mentions', fields, params, null, pathOverride);
  }

  getNotificationMessageTokens(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(UserPageOneTimeOptInTokenSettings, fields, params, fetchFirstPage, '/notification_message_tokens');
  }

  getProductAppeal(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGShoppingProductAppeal, fields, params, fetchFirstPage, '/product_appeal');
  }

  createProductAppeal(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<IGShoppingProductAppeal> {
    return this.createEdge('/product_appeal', fields, params, IGShoppingProductAppeal, pathOverride);
  }

  getRecentlySearchedHashtags(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ShadowIGHashtag, fields, params, fetchFirstPage, '/recently_searched_hashtags');
  }

  getStories(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGMedia, fields, params, fetchFirstPage, '/stories');
  }

  getTags(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGMedia, fields, params, fetchFirstPage, '/tags');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGUser {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}