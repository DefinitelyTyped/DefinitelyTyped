import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CollaborativeAdsPartnerBusinesses
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CollaborativeAdsPartnerBusinesses extends AbstractCrudObject {
    static get Fields(): Readonly<{
        collaborative_ads_partner_businesses_info: "collaborative_ads_partner_businesses_info";
        dedicated_partner_business_info: "dedicated_partner_business_info";
    }>;
}
