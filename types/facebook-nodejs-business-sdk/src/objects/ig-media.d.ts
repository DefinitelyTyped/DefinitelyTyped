import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import IGComment from './ig-comment';
import ShadowIGMediaProductTags from './shadow-ig-media-product-tags';
/**
 * IGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMedia extends AbstractCrudObject {
    static get Fields(): Readonly<{
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
    getChildren(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCollaborators(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<IGComment>;
    getInsights(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteProductTags(params?: Record<any, any>): Promise<any>;
    getProductTags(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductTag(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<ShadowIGMediaProductTags>;
    get(fields: Array<string>, params?: Record<any, any>): IGMedia;
    update(fields: Array<string>, params?: Record<any, any>): IGMedia;
}
