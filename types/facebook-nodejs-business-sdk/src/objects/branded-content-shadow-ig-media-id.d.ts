import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandedContentShadowIGMediaID
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentShadowIGMediaID extends AbstractCrudObject {
    static get Fields(): Readonly<{
        eligibility_errors: "eligibility_errors";
        has_permission_for_partnership_ad: "has_permission_for_partnership_ad";
        id: "id";
        owner_id: "owner_id";
        permalink: "permalink";
    }>;
}
