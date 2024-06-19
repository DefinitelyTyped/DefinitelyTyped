import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdLabel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLabel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): AdLabel;
    update(fields: Array<string>, params?: Record<string, any>): AdLabel;
}
