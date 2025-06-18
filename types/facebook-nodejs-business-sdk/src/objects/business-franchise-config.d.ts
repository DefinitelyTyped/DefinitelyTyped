import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessFranchiseConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessFranchiseConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        active_partner_count: "active_partner_count";
        agency_business: "agency_business";
        agency_business_asset_group: "agency_business_asset_group";
        brand_name: "brand_name";
        business: "business";
        business_vertical: "business_vertical";
        id: "id";
        partner_count: "partner_count";
        pending_agency_business: "pending_agency_business";
        program_count: "program_count";
        shared_business_asset_group: "shared_business_asset_group";
        shared_creative_folder_count: "shared_creative_folder_count";
        shared_custom_audience_count: "shared_custom_audience_count";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessFranchiseConfig>;
}
