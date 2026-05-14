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
        linked_products: "linked_products";
        owner_id: "owner_id";
        permalink: "permalink";
        product_suggestions: "product_suggestions";
        recommended_campaign_objectives: "recommended_campaign_objectives";
    }>;
    static get MediaRelationship(): Readonly<{
        is_tagged: "IS_TAGGED";
        owned: "OWNED";
    }>;
}
