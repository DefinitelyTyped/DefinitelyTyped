import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import LiveVideo from "./live-video";
/**
 * Event
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Event extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Category(): Record<string, any>;
    static get OnlineEventFormat(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get EventStateFilter(): Record<string, any>;
    static get TimeFilter(): Record<string, any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLiveVideo(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<LiveVideo>;
    getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRoles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTicketTiers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): Event;
}
