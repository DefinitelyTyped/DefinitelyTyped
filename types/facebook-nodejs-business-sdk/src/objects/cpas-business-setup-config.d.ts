import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class CPASBusinessSetupConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASBusinessSetupConfig>;
    update(fields: string[], params?: Record<string, any>): Promise<CPASBusinessSetupConfig>;
}
