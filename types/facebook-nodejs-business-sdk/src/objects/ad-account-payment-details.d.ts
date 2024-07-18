import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountPaymentDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPaymentDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount: "amount";
        create_date: "create_date";
        id: "id";
        last_action_status: "last_action_status";
        metadata: "metadata";
        payment_details_id: "payment_details_id";
    }>;
}
