import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import LiveVideo from "./live-video";
/**
 * Event

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Event extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Category(): Record<string, any>;
    static get OnlineEventFormat(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get EventStateFilter(): Record<string, any>;
    static get TimeFilter(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTicketTiers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<Event>;
}
