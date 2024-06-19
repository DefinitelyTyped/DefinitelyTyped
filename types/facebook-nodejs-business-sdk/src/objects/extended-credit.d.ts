import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ExtendedCreditInvoiceGroup from "./extended-credit-invoice-group";
import ExtendedCreditAllocationConfig from "./extended-credit-allocation-config";
/**
 * ExtendedCredit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCredit extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getExtendedCreditInvoiceGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createExtendedCreditInvoiceGroup(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ExtendedCreditInvoiceGroup>;
    getOwningCreditAllocationConfigs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createOwningCreditAllocationConfig(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ExtendedCreditAllocationConfig>;
    createWhatsAppCreditSharingAnDAttach(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): ExtendedCredit;
}
