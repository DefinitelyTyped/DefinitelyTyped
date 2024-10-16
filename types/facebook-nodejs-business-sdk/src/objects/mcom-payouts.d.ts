import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * McomPayouts
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomPayouts extends AbstractCrudObject {
    static get Fields(): Readonly<{
        number_of_orders: "number_of_orders";
        order_ids: "order_ids";
        payout_amount: "payout_amount";
        payout_provider_reference_id: "payout_provider_reference_id";
        payout_status: "payout_status";
        payout_time: "payout_time";
        provider: "provider";
    }>;
}
