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
    getAlbums(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAlbum(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Album>;
    getAttachmentSurfaces(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAttachmentSurface(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getDocs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeaturedCards(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeaturedCard(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Post>;
    getFiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createGroup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    deleteMembers(params?: Record<string, any>): Promise<any>;
    createMember(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Group>;
    getOptedInMembers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createShiftSetting(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    get(fields: string[], params?: Record<string, any>): Promise<Group>;
    update(fields: string[], params?: Record<string, any>): Promise<Group>;
}
