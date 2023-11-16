import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * InstagramUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        follow_count: "follow_count";
        followed_by_count: "followed_by_count";
        has_profile_picture: "has_profile_picture";
        id: "id";
        is_private: "is_private";
        is_published: "is_published";
        media_count: "media_count";
        mini_shop_storefront: "mini_shop_storefront";
        owner_business: "owner_business";
        profile_pic: "profile_pic";
        username: "username";
    }>;
    getAgencies(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getArEffects(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAuthorizedAdAccounts(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAuthorizedAdAccount(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<InstagramUser>;
    get(fields: Array<string>, params?: Record<any, any>): InstagramUser;
}
