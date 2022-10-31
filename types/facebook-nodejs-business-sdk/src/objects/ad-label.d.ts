import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdLabel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdLabel>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdLabel>;
}
