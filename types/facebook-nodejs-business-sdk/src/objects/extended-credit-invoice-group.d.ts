import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdAccount from "./ad-account";
/**
 * ExtendedCreditInvoiceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditInvoiceGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdAccount>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): ExtendedCreditInvoiceGroup;
    update(fields: Array<string>, params?: Record<string, any>): ExtendedCreditInvoiceGroup;
}
