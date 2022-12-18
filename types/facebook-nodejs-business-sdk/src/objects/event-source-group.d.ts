import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class EventSourceGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getSharedAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSharedAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSharedAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSharedAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<EventSourceGroup>;
    get(fields: string[], params?: Record<string, any>): Promise<EventSourceGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<EventSourceGroup>;
}
