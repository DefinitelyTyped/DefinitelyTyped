import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PaymentRequestDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentRequestDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount: "amount";
        creation_time: "creation_time";
        note: "note";
        payment_request_id: "payment_request_id";
        receiver_id: "receiver_id";
        reference_number: "reference_number";
        sender_id: "sender_id";
        status: "status";
        transaction_time: "transaction_time";
    }>;
}
