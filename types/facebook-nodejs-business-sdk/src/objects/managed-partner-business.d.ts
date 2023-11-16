import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ManagedPartnerBusiness
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ManagedPartnerBusiness extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account: "ad_account";
        catalog_segment: "catalog_segment";
        extended_credit: "extended_credit";
        page: "page";
        seller_business_info: "seller_business_info";
        seller_business_status: "seller_business_status";
        template: "template";
    }>;
}
