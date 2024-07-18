import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import BrandedContentShadowIGUserID from "./branded-content-shadow-ig-user-id";
import IGComment from "./ig-comment";
import ShadowIGMediaProductTags from "./shadow-ig-media-product-tags";
/**
 * IGMedia
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMedia extends AbstractCrudObject {
    static get Fields(): Readonly<{
        boost_eligibility_info: "boost_eligibility_info";
        caption: "caption";
        comments_count: "comments_count";
        copyright_check_information: "copyright_check_information";
        id: "id";
        ig_id: "ig_id";
        is_comment_enabled: "is_comment_enabled";
        is_shared_to_feed: "is_shared_to_feed";
        like_count: "like_count";
        media_product_type: "media_product_type";
        media_type: "media_type";
        media_url: "media_url";
        owner: "owner";
        permalink: "permalink";
        shortcode: "shortcode";
        thumbnail_url: "thumbnail_url";
        timestamp: "timestamp";
        username: "username";
    }>;
    getBoostAdsList(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getBrandedContentPartnerPromote(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBrandedContentPartnerPromote(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BrandedContentShadowIGUserID>;
    getChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCollaborators(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGComment>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteProductTags(params?: Record<string, any>): Promise<any>;
    getProductTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductTag(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ShadowIGMediaProductTags>;
    get(fields: string[], params?: Record<string, any>): Promise<IGMedia>;
    update(fields: string[], params?: Record<string, any>): Promise<IGMedia>;
}
