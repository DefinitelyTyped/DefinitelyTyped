import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class LocalServiceBusiness extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Availability(): Record<string, any>;
    static get Condition(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<LocalServiceBusiness>;
}
