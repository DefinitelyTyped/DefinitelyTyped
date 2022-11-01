import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import IGMedia from './ig-media';
export default class IGUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAvailableCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCatalogProductSearch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getContentPublishingLimit(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveMedia(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMedia(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMedia(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMediaPublish(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<IGMedia>;
    createMention(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getProductAppeal(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductAppeal(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getRecentlySearchedHashtags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getStories(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<IGUser>;
}
