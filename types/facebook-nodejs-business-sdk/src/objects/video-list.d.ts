import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class VideoList extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getVideos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVideos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoList>;
}
