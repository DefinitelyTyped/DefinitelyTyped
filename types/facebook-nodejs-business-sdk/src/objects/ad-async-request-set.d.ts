import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdAsyncRequestSet

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequestSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get NotificationMode(): Record<string, any>;
    getRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAsyncRequestSet>;    get(fields: string[], params?: Record<string, any>): Promise<AdAsyncRequestSet>;
}
