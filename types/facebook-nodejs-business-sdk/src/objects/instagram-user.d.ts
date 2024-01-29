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
    getAgencies(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getArEffects(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getArEffects(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getArEffects(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAuthorizedAdAccounts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAuthorizedAdAccounts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAuthorizedAdAccount(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<InstagramUser>;
    get(fields: string[], params?: Record<any, any>): Promise<InstagramUser>;
}
