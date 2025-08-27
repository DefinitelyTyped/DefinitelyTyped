import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsSegments
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsSegments extends AbstractCrudObject {
    static get Fields(): Readonly<{
        daily_audience_size: "daily_audience_size";
        daily_impressions: "daily_impressions";
        description: "description";
        id: "id";
        name: "name";
        path: "path";
        popularity: "popularity";
        projected_cpm: "projected_cpm";
        projected_daily_revenue: "projected_daily_revenue";
    }>;
}
