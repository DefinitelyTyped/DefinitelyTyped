import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CampaignGroupBrandConfiguration
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CampaignGroupBrandConfiguration extends AbstractCrudObject {
    static get Fields(): Readonly<{
        brand_product_name: "brand_product_name";
        locale: "locale";
        vertical: "vertical";
    }>;
}
