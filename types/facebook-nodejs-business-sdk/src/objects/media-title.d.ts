import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * MediaTitle
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaTitle extends AbstractCrudObject {
    static get Fields(): Readonly<{
        applinks: "applinks";
        category_specific_fields: "category_specific_fields";
        content_category: "content_category";
        currency: "currency";
        description: "description";
        fb_page_alias: "fb_page_alias";
        fb_page_id: "fb_page_id";
        genres: "genres";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        kg_fb_id: "kg_fb_id";
        media_title_id: "media_title_id";
        price: "price";
        sanitized_images: "sanitized_images";
        title: "title";
        title_display_name: "title_display_name";
        unit_price: "unit_price";
        url: "url";
        visibility: "visibility";
        wiki_data_item: "wiki_data_item";
    }>;
    static get ImageFetchStatus(): Readonly<{
        direct_upload: "DIRECT_UPLOAD";
        fetched: "FETCHED";
        fetch_failed: "FETCH_FAILED";
        no_status: "NO_STATUS";
        outdated: "OUTDATED";
        partial_fetch: "PARTIAL_FETCH";
    }>;
    static get Visibility(): Readonly<{
        published: "PUBLISHED";
        staging: "STAGING";
    }>;
    static get ContentCategory(): Readonly<{
        movie: "MOVIE";
        music: "MUSIC";
        tv_show: "TV_SHOW";
    }>;
    getAugmentedRealitiesMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): MediaTitle;
    update(fields: Array<string>, params?: Record<string, any>): MediaTitle;
}
