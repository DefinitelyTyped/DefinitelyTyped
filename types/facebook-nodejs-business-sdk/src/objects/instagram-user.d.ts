import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import IGUpcomingEvent from "./ig-upcoming-event";
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
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getArEffects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAuthorizedAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<InstagramUser>;
    getUpcomingEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpcomingEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGUpcomingEvent>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramUser>;
}
