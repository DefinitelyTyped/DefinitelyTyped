import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdAccount from './ad-account';
export default class ExtendedCreditInvoiceGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
}
