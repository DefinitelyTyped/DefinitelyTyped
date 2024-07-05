import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsTargetingInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsTargetingInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_size: "audience_size";
        clicks: "clicks";
        conversion_cost: "conversion_cost";
        conversions: "conversions";
        description: "description";
        id: "id";
        impressions: "impressions";
        name: "name";
        revenue: "revenue";
        spend: "spend";
        type: "type";
    }>;
}
