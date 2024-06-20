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

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAvailableCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getBrandedContentAdPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBrandedContentAdPermission(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGBCAdsPermission>;
    getBrandedContentAdvertisableMedias(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteBrandedContentTagApproval(params?: Record<string, any>): Promise<any>;
    getBrandedContentTagApproval(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBrandedContentTagApproval(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BrandedContentShadowIGUserID>;
    getCatalogProductSearch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getContentPublishingLimit(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDataSet(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createDataSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMedia(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMediaPublish(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMention(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getNotificationMessageTokens(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProductAppeal(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductAppeal(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGShoppingProductAppeal>;
    getRecentlySearchedHashtags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUser>;
}
