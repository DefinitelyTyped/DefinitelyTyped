import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * AdLabel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLabel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account: "account";
        created_time: "created_time";
        id: "id";
        name: "name";
        updated_time: "updated_time";
    }>;
    getAdCreatives(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdCreatives(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdCreatives(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAds(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAds(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAds(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdSets(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdSets(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdSets(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCampaigns(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCampaigns(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCampaigns(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<AdLabel>;
    update(fields: string[], params?: Record<any, any>): Promise<AdLabel>;
}
