import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import IGMedia from './ig-media';
import IGShoppingProductAppeal from './ig-shopping-product-appeal';
/**
 * IGUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        biography: "biography";
        business_discovery: "business_discovery";
        followers_count: "followers_count";
        follows_count: "follows_count";
        id: "id";
        ig_id: "ig_id";
        media_count: "media_count";
        mentioned_comment: "mentioned_comment";
        mentioned_media: "mentioned_media";
        name: "name";
        owner_business: "owner_business";
        profile_picture_url: "profile_picture_url";
        shopping_product_tag_eligibility: "shopping_product_tag_eligibility";
        shopping_review_status: "shopping_review_status";
        username: "username";
        website: "website";
    }>;
    getAvailableCatalogs(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAvailableCatalogs(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAvailableCatalogs(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCatalogProductSearch(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCatalogProductSearch(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCatalogProductSearch(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getContentPublishingLimit(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getContentPublishingLimit(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getContentPublishingLimit(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDataset(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getDataset(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getDataset(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLiveMedia(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLiveMedia(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLiveMedia(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMedia(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getMedia(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getMedia(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMedia(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMediaPublish(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMention(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getNotificationMessageTokens(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getNotificationMessageTokens(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getNotificationMessageTokens(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProductAppeal(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getProductAppeal(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getProductAppeal(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductAppeal(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<IGShoppingProductAppeal>;
    getRecentlySearchedHashtags(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getRecentlySearchedHashtags(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getRecentlySearchedHashtags(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getStories(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getStories(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getStories(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTags(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTags(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTags(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<IGUser>;
}
