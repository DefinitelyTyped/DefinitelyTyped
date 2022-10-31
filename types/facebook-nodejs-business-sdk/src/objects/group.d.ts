import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Album from './album';
import Post from './post';
import LiveVideo from './live-video';
import Photo from './photo';
import AdVideo from './ad-video';
export default class Group extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get JoinSetting(): Record<string, any>;
    static get PostPermissions(): Record<string, any>;
    static get Purpose(): Record<string, any>;
    static get GroupType(): Record<string, any>;
    deleteAdmins(params?: Record<string, any>): Promise<any>;
    createAdmin(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Group>;
    getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAlbum(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Album>;
    getAttachmentSurfaces(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAttachmentSurface(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getDocs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeaturedCards(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeaturedCard(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeed(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Post>;
    getFiles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createGroup(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Group>;
    getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<LiveVideo>;
    deleteMembers(params?: Record<string, any>): Promise<any>;
    createMember(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Group>;
    getOptedInMembers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createShiftSetting(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdVideo>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Group>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Group>;
}
