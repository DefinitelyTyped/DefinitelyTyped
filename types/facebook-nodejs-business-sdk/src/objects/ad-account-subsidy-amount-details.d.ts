import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountSubsidyAmountDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountSubsidyAmountDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        entered_amount: "entered_amount";
        fee_amount: "fee_amount";
        total_amount: "total_amount";
    }>;
}
