import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdAsyncRequestSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get NotificationMode(): Record<string, any>;
    getRequests(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getRequests(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAsyncRequestSet>;
    update(fields: string[], params?: Record<string, any>): Promise<AdAsyncRequestSet>;
}
