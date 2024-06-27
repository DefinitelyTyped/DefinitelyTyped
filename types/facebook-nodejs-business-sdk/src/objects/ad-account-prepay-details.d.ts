import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountPrepayDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPrepayDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        default_funding_amount: "default_funding_amount";
        max_acceptable_amount: "max_acceptable_amount";
        min_acceptable_amount: "min_acceptable_amount";
        should_collect_business_details: "should_collect_business_details";
    }>;
}
