import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdAsyncRequestSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequestSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get NotificationMode(): Record<string, any>;
    getRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): AdAsyncRequestSet;
    update(fields: Array<string>, params?: Record<string, any>): AdAsyncRequestSet;
}
