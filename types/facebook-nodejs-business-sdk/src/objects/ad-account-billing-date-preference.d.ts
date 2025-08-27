import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountBillingDatePreference
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountBillingDatePreference extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account: "ad_account";
        day_of_month: "day_of_month";
        id: "id";
        next_bill_date: "next_bill_date";
        time_created: "time_created";
        time_effective: "time_effective";
    }>;
}
