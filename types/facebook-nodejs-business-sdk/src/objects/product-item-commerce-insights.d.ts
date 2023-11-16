import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductItemCommerceInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemCommerceInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        message_sends: "message_sends";
        organic_impressions: "organic_impressions";
        paid_impressions: "paid_impressions";
    }>;
}
