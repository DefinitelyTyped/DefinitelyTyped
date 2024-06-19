import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import IGBCAdsPermission from "./igbc-ads-permission";
import BrandedContentShadowIGUserID from "./branded-content-shadow-ig-user-id";
import AdsPixel from "./ads-pixel";
import IGMedia from "./ig-media";
import IGShoppingProductAppeal from "./ig-shopping-product-appeal";
/**
 * IGUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAvailableCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getBrandedContentAdPermissions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBrandedContentAdPermission(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<IGBCAdsPermission>;
    getBrandedContentAdvertisableMedias(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteBrandedContentTagApproval(params?: Record<string, any>): Promise<any>;
    getBrandedContentTagApproval(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBrandedContentTagApproval(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BrandedContentShadowIGUserID>;
    getCatalogProductSearch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getContentPublishingLimit(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDataSet(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createDataSet(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdsPixel>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLiveMedia(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMedia(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMedia(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<IGMedia>;
    createMediaPublish(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<IGMedia>;
    createMention(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getNotificationMessageTokens(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProductAppeal(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductAppeal(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<IGShoppingProductAppeal>;
    getRecentlySearchedHashtags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getStories(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): IGUser;
}
