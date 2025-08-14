import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAmountSpentHistory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAmountSpentHistory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount_spent: "amount_spent";
        spend_cap: "spend_cap";
        time_start: "time_start";
        time_stop: "time_stop";
    }>;
}
