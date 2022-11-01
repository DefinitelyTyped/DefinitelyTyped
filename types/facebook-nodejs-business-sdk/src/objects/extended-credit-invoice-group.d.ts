import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdAccount from './ad-account';
export default class ExtendedCreditInvoiceGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAccount>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
}
