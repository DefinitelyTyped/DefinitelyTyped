import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ExtendedCreditInvoiceGroup from './extended-credit-invoice-group';
import ExtendedCreditAllocationConfig from './extended-credit-allocation-config';
/**
 * ExtendedCredit
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCredit extends AbstractCrudObject {
    static get Fields(): Readonly<{
        allocated_amount: "allocated_amount";
        balance: "balance";
        credit_available: "credit_available";
        credit_type: "credit_type";
        id: "id";
        is_access_revoked: "is_access_revoked";
        is_automated_experience: "is_automated_experience";
        legal_entity_name: "legal_entity_name";
        liable_address: "liable_address";
        liable_biz_name: "liable_biz_name";
        max_balance: "max_balance";
        online_max_balance: "online_max_balance";
        owner_business: "owner_business";
        owner_business_name: "owner_business_name";
        partition_from: "partition_from";
        receiving_credit_allocation_config: "receiving_credit_allocation_config";
        send_bill_to_address: "send_bill_to_address";
        send_bill_to_biz_name: "send_bill_to_biz_name";
        sold_to_address: "sold_to_address";
    }>;
    getExtendedCreditInvoiceGroups(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getExtendedCreditInvoiceGroups(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getExtendedCreditInvoiceGroups(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createExtendedCreditInvoiceGroup(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<ExtendedCreditInvoiceGroup>;
    getOwningCreditAllocationConfigs(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getOwningCreditAllocationConfigs(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getOwningCreditAllocationConfigs(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOwningCreditAllocationConfig(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<ExtendedCreditAllocationConfig>;
    createWhatsappCreditSharingAndAttach(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<ExtendedCredit>;
}
