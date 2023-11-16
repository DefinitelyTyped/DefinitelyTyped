import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import InstagramComment from './instagram-comment';
/**
 * InstagramMedia
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramMedia extends AbstractCrudObject {
    static get Fields(): Readonly<{
        caption_text: "caption_text";
        comment_count: "comment_count";
        content_type: "content_type";
        display_url: "display_url";
        filter_name: "filter_name";
        id: "id";
        latitude: "latitude";
        like_count: "like_count";
        location: "location";
        location_name: "location_name";
        longitude: "longitude";
        owner_instagram_user: "owner_instagram_user";
        permalink: "permalink";
        taken_at: "taken_at";
        video_url: "video_url";
    }>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<InstagramComment>;
    get(fields: string[], params?: Record<any, any>): Promise<InstagramMedia>;
}
