import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandedContentEligibleSponsorIDs
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentEligibleSponsorIDs extends AbstractCrudObject {
    static get Fields(): Readonly<{
        fb_page: "fb_page";
        ig_account_v2: "ig_account_v2";
        ig_approval_needed: "ig_approval_needed";
    }>;
}
