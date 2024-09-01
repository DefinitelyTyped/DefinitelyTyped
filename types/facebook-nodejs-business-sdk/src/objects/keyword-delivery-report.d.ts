import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * KeywordDeliveryReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class KeywordDeliveryReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        estimated_clicks: "estimated_clicks";
        estimated_conversions: "estimated_conversions";
        estimated_cost: "estimated_cost";
        estimated_cpc: "estimated_cpc";
        estimated_ctr: "estimated_ctr";
        estimated_cvr: "estimated_cvr";
        estimated_impressions: "estimated_impressions";
        estimated_returns: "estimated_returns";
        keyword: "keyword";
    }>;
}
