import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Album from "./album";
import Post from "./post";
import LiveVideo from "./live-video";
import Photo from "./photo";
import AdVideo from "./ad-video";
/**
 * Group
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Group extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get JoinSetting(): Record<string, any>;
    static get PostPermissions(): Record<string, any>;
    static get Purpose(): Record<string, any>;
    static get GroupType(): Record<string, any>;
    deleteAdMIns(params?: Record<string, any>): Promise<any>;
    createAdMIn(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Group>;
    getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAlbum(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Album>;
    getDocs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFeed(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Post>;
    getFiles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createGroup(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Group>;
    getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLiveVideo(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<LiveVideo>;
    deleteMembers(params?: Record<string, any>): Promise<any>;
    createMember(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Group>;
    getOptedInMembers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoto(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createVideo(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdVideo>;
    get(fields: Array<string>, params?: Record<string, any>): Group;
    update(fields: Array<string>, params?: Record<string, any>): Group;
}
