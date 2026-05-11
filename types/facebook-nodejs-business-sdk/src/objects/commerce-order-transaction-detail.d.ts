import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CommerceOrderTransactionDetail
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
    static get Fields(): Readonly<{
        merchant_order_id: "merchant_order_id";
        net_payment_amount: "net_payment_amount";
        order_created: "order_created";
        order_details: "order_details";
        order_id: "order_id";
        payout_reference_id: "payout_reference_id";
        postal_code: "postal_code";
        processing_fee: "processing_fee";
        state: "state";
        tax_rate: "tax_rate";
        transaction_date: "transaction_date";
        transaction_type: "transaction_type";
        transfer_id: "transfer_id";
        id: "id";
    }>;
    getItems(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTaxDetails(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
}
