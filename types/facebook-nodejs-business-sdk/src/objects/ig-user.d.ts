import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import IGMedia from './ig-media';
export default class IGUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAvailableCatalogs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAvailableCatalogs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAvailableCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCatalogProductSearch(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCatalogProductSearch(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCatalogProductSearch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getContentPublishingLimit(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getContentPublishingLimit(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getContentPublishingLimit(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLiveMedia(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLiveMedia(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMedia(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMedia(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMedia(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMediaPublish(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMention(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getProductAppeal(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductAppeal(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductAppeal(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductAppeal(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getRecentlySearchedHashtags(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getRecentlySearchedHashtags(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getRecentlySearchedHashtags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getStories(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getStories(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTags(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTags(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUser>;
}
