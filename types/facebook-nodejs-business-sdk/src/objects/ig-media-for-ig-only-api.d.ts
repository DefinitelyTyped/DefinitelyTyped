import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * IGMediaForIGOnlyAPI
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMediaForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Readonly<{
        caption: "caption";
        id: "id";
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
    getChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<IGMediaForIGOnlyAPI>;
}
