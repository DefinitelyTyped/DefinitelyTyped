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
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTicketTiers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<Event>;
}
