import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import IGMedia from './ig-media';
export default class IGUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAvailableCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCatalogProductSearch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getContentPublishingLimit(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMedia(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMediaPublish(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMention(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getProductAppeal(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductAppeal(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getRecentlySearchedHashtags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<IGUser>;
}
