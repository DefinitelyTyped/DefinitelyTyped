import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Comment from './comment';
import Photo from './photo';
/**
 * Album
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Album extends AbstractCrudObject {
    static get Fields(): Readonly<{
        backdated_time: "backdated_time";
        backdated_time_granularity: "backdated_time_granularity";
        can_backdate: "can_backdate";
        can_upload: "can_upload";
        count: "count";
        cover_photo: "cover_photo";
        created_time: "created_time";
        description: "description";
        edit_link: "edit_link";
        event: "event";
        from: "from";
        id: "id";
        is_user_facing: "is_user_facing";
        link: "link";
        location: "location";
        modified_major: "modified_major";
        name: "name";
        photo_count: "photo_count";
        place: "place";
        privacy: "privacy";
        type: "type";
        updated_time: "updated_time";
        video_count: "video_count";
    }>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLike(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Album>;
    getPhotos(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPhotos(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPhotos(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPhoto(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Album>;
}
