import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class BusinessUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Role(): Record<string, any>;
    getAssignedAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAssignedBusinessAssetGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedBusinessAssetGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedBusinessAssetGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAssignedPages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedPages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAssignedProductCatalogs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedProductCatalogs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessUser>;
    update(fields: string[], params?: Record<string, any>): Promise<BusinessUser>;
}
