import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CollaborativeAdsShareSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CollaborativeAdsShareSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        agency_business: "agency_business";
        id: "id";
        product_catalog_proxy_id: "product_catalog_proxy_id";
        utm_campaign: "utm_campaign";
        utm_medium: "utm_medium";
        utm_source: "utm_source";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CollaborativeAdsShareSettings>;
}
