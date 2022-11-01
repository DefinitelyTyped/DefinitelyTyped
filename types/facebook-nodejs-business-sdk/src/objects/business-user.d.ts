import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class BusinessUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Role(): Record<string, any>;
    getAssignedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedBusinessAssetGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessUser>;
    update(fields: string[], params?: Record<string, any>): Promise<BusinessUser>;
}
