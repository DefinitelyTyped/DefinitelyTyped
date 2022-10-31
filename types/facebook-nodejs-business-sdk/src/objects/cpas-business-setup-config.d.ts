import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class CPASBusinessSetupConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<CPASBusinessSetupConfig>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<CPASBusinessSetupConfig>;
}
