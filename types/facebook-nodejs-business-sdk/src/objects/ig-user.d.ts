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
    getAvailableCatalogs(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCatalogProductSearch(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getContentPublishingLimit(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDataset(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsights(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLiveMedia(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMedia(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMedia(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMediaPublish(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMention(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getNotificationMessageTokens(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProductAppeal(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductAppeal(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<IGShoppingProductAppeal>;
    getRecentlySearchedHashtags(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getStories(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTags(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<any, any>): IGUser;
}
