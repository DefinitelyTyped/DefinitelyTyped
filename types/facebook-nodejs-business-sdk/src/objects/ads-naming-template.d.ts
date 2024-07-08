import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsNamingTemplate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsNamingTemplate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        api_fields: "api_fields";
        api_version: "api_version";
        field_order: "field_order";
        id: "id";
        level: "level";
        separator: "separator";
        template_version: "template_version";
        user_defined_fields: "user_defined_fields";
        value_separator: "value_separator";
    }>;
    static get Level(): Readonly<{
        adgroup: "ADGROUP";
        ad_account: "AD_ACCOUNT";
        campaign: "CAMPAIGN";
        campaign_group: "CAMPAIGN_GROUP";
        opportunities: "OPPORTUNITIES";
        privacy_info_center: "PRIVACY_INFO_CENTER";
        topline: "TOPLINE";
        unique_adcreative: "UNIQUE_ADCREATIVE";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsNamingTemplate>;
}
