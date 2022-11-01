import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import LiveVideo from './live-video';
export default class Event extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Category(): Record<string, any>;
    static get OnlineEventFormat(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get EventStateFilter(): Record<string, any>;
    static get TimeFilter(): Record<string, any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<LiveVideo>;
    getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRoles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTicketTiers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Event>;
}
