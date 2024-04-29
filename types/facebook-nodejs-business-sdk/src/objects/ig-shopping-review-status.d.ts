import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGShoppingReviewStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGShoppingReviewStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        onsite_eligibility: "onsite_eligibility";
        reasons: "reasons";
        status: "status";
    }>;
}
