import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ExtendedCreditInvoiceGroup from "./extended-credit-invoice-group";
import ExtendedCreditAllocationConfig from "./extended-credit-allocation-config";
/**
 * ExtendedCredit

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCredit extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getExtendedCreditInvoiceGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createExtendedCreditInvoiceGroup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ExtendedCreditInvoiceGroup>;
    getOwningCreditAllocationConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOwningCreditAllocationConfig(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ExtendedCreditAllocationConfig>;
    createWhatsAppCreditSharingAnDAttach(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ExtendedCredit>;
}
