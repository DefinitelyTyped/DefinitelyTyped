import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ExtendedCreditInvoiceGroup from './extended-credit-invoice-group';
import ExtendedCreditAllocationConfig from './extended-credit-allocation-config';
export default class ExtendedCredit extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getExtendedCreditInvoiceGroups(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createExtendedCreditInvoiceGroup(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ExtendedCreditInvoiceGroup>;
    getOwningCreditAllocationConfigs(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createOwningCreditAllocationConfig(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ExtendedCreditAllocationConfig>;
    createWhatsappCreditSharingAndAttach(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCredit>;
}
