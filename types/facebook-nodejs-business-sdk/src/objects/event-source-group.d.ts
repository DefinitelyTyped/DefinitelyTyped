import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class EventSourceGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getSharedAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSharedAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<EventSourceGroup>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<EventSourceGroup>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<EventSourceGroup>;
}
