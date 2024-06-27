import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdAccount from "./ad-account";
/**
 * ExtendedCreditInvoiceGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditInvoiceGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        auto_enroll: "auto_enroll";
        bill_to_address: "bill_to_address";
        customer_po_number: "customer_po_number";
        email: "email";
        emails: "emails";
        id: "id";
        liable_address: "liable_address";
        name: "name";
        sold_to_address: "sold_to_address";
    }>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
}
