import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * CommerceOrderTransactionDetail
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
    static get Fields(): Readonly<{
        net_payment_amount: "net_payment_amount";
        order_details: "order_details";
        payout_reference_id: "payout_reference_id";
        processing_fee: "processing_fee";
        tax_rate: "tax_rate";
        transaction_date: "transaction_date";
        transaction_type: "transaction_type";
        transfer_id: "transfer_id";
        id: "id";
    }>;
    getItems(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getItems(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getItems(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTaxDetails(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTaxDetails(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTaxDetails(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
}
