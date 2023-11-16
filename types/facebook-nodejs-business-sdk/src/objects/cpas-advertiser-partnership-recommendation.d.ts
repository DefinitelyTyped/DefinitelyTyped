import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CPASAdvertiserPartnershipRecommendation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASAdvertiserPartnershipRecommendation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        advertiser_business_id: "advertiser_business_id";
        brand_business_id: "brand_business_id";
        brands: "brands";
        countries: "countries";
        id: "id";
        merchant_business_id: "merchant_business_id";
        merchant_categories: "merchant_categories";
        status: "status";
        status_reason: "status_reason";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CPASAdvertiserPartnershipRecommendation>;
}
