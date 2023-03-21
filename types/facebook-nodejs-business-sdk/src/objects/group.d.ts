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
    createAdmin(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getAlbums(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAlbums(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAlbums(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAlbum(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Album>;
    getAttachmentSurfaces(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAttachmentSurfaces(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAttachmentSurfaces(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAttachmentSurface(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getDocs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDocs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDocs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getEvents(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getEvents(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFeaturedCards(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getFeaturedCards(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getFeaturedCards(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createFeaturedCard(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getFeed(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getFeed(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Post>;
    getFiles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getFiles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getFiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createGroup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getLiveVideos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLiveVideos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    deleteMembers(params?: Record<string, any>): Promise<any>;
    createMember(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getOptedInMembers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOptedInMembers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOptedInMembers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShiftSetting(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getVideos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVideos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    get(fields: string[], params?: Record<string, any>): Promise<Group>;
    update(fields: string[], params?: Record<string, any>): Promise<Group>;
}
