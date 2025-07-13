import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountSpendCapChangeHistory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountSpendCapChangeHistory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action: "action";
        spend_cap: "spend_cap";
        time_start: "time_start";
        time_stop: "time_stop";
    }>;
}
