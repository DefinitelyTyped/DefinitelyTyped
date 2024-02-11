import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Comment from './comment';
/**
 * Photo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Photo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        album: "album";
        alt_text: "alt_text";
        alt_text_custom: "alt_text_custom";
        backdated_time: "backdated_time";
        backdated_time_granularity: "backdated_time_granularity";
        can_backdate: "can_backdate";
        can_delete: "can_delete";
        can_tag: "can_tag";
        created_time: "created_time";
        event: "event";
        from: "from";
        height: "height";
        icon: "icon";
        id: "id";
        images: "images";
        link: "link";
        name: "name";
        name_tags: "name_tags";
        page_story_id: "page_story_id";
        picture: "picture";
        place: "place";
        position: "position";
        source: "source";
        target: "target";
        updated_time: "updated_time";
        webp_images: "webp_images";
        width: "width";
    }>;
    static get BackdatedTimeGranularity(): Readonly<{
        day: "day";
        hour: "hour";
        min: "min";
        month: "month";
        none: "none";
        year: "year";
    }>;
    static get UnpublishedContentType(): Readonly<{
        ads_post: "ADS_POST";
        draft: "DRAFT";
        inline_created: "INLINE_CREATED";
        published: "PUBLISHED";
        reviewable_branded_content: "REVIEWABLE_BRANDED_CONTENT";
        scheduled: "SCHEDULED";
        scheduled_recurring: "SCHEDULED_RECURRING";
    }>;
    static get Type(): Readonly<{
        profile: "profile";
        tagged: "tagged";
        uploaded: "uploaded";
    }>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Comment>;
    getInsights(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLikes(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLike(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Photo>;
    getSponsorTags(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSponsorTags(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSponsorTags(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<Photo>;
}
