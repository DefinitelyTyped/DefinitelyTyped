import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Album from "./album";
import Post from "./post";
import LiveVideo from "./live-video";
import Photo from "./photo";
import AdVideo from "./ad-video";
/**
 * Group

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Group extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get JoinSetting(): Record<string, any>;
    static get PostPermissions(): Record<string, any>;
    static get Purpose(): Record<string, any>;
    static get GroupType(): Record<string, any>;
    deleteAdMIns(params?: Record<string, any>): Promise<any>;
    createAdMIn(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getAlbums(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAlbum(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Album>;
    getDocs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Post>;
    getFiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createGroup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    deleteMembers(params?: Record<string, any>): Promise<any>;
    createMember(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getOptedInMembers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    get(fields: string[], params?: Record<string, any>): Promise<Group>;    get(fields: string[], params?: Record<string, any>): Promise<Group>;
}
