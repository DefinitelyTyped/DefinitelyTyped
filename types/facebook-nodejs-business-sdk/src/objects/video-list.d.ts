import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class VideoList extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<VideoList>;
}
