import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeRecommenderSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeRecommenderSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        preferred_events: "preferred_events";
        product_sales_channel: "product_sales_channel";
    }>;
}
