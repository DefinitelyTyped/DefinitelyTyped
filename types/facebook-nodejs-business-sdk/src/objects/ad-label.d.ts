import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdLabel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdLabel>;
    update(fields: string[], params?: Record<string, any>): Promise<AdLabel>;
}
