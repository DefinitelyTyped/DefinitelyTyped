import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * McomInvoiceStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bank_account_number: "bank_account_number";
        bank_code: "bank_code";
        invoice_id: "invoice_id";
        invoice_status: "invoice_status";
        page_id: "page_id";
        payment_method: "payment_method";
        payment_type: "payment_type";
        payout_amount: "payout_amount";
        slip_verification_error: "slip_verification_error";
        slip_verification_status: "slip_verification_status";
        transaction_fee: "transaction_fee";
        transfer_slip: "transfer_slip";
    }>;
}
