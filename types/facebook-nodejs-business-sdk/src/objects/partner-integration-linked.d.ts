import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerIntegrationLinked
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerIntegrationLinked extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ads_pixel: "ads_pixel";
        application: "application";
        completed_integration_types: "completed_integration_types";
        external_business_connection_id: "external_business_connection_id";
        external_id: "external_id";
        has_oauth_token: "has_oauth_token";
        id: "id";
        mbe_app_id: "mbe_app_id";
        mbe_asset_id: "mbe_asset_id";
        mbe_external_business_id: "mbe_external_business_id";
        name: "name";
        offline_conversion_data_set: "offline_conversion_data_set";
        page: "page";
        partner: "partner";
        product_catalog: "product_catalog";
        setup_status: "setup_status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PartnerIntegrationLinked>;
}
