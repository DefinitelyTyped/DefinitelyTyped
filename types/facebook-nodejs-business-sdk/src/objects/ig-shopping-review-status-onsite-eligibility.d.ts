import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGShoppingReviewStatusOnsiteEligibility
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGShoppingReviewStatusOnsiteEligibility extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_eligible: "is_eligible";
        reasons: "reasons";
    }>;
}
