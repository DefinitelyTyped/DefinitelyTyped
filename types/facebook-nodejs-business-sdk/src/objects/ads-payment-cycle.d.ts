import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPaymentCycle
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPaymentCycle extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        created_time: "created_time";
        multiplier: "multiplier";
        requested_threshold_amount: "requested_threshold_amount";
        threshold_amount: "threshold_amount";
        updated_time: "updated_time";
    }>;
}
