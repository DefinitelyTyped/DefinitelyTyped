import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessPartnerPremiumOptions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessPartnerPremiumOptions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        enable_basket_insight: "enable_basket_insight";
        enable_extended_audience_retargeting: "enable_extended_audience_retargeting";
        retailer_custom_audience_config: "retailer_custom_audience_config";
    }>;
}
