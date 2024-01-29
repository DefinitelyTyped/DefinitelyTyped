import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CommercePayout
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommercePayout extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount: "amount";
        payout_date: "payout_date";
        payout_reference_id: "payout_reference_id";
        status: "status";
        transfer_id: "transfer_id";
    }>;
}
