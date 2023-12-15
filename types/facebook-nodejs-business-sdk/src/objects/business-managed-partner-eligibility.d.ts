import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessManagedPartnerEligibility
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessManagedPartnerEligibility extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_eligible: "is_eligible";
        reason_code: "reason_code";
        reason_description: "reason_description";
    }>;
}
