import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * VideoList
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        description: "description";
        id: "id";
        last_modified: "last_modified";
        owner: "owner";
        season_number: "season_number";
        thumbnail: "thumbnail";
        title: "title";
        videos_count: "videos_count";
    }>;
    getVideos(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVideos(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVideos(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<VideoList>;
}
