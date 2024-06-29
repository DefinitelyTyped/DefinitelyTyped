import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdKeywordStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdKeywordStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
        clicks: "clicks";
        cost_per_total_action: "cost_per_total_action";
        cost_per_unique_click: "cost_per_unique_click";
        cpc: "cpc";
        cpm: "cpm";
        cpp: "cpp";
        ctr: "ctr";
        frequency: "frequency";
        id: "id";
        impressions: "impressions";
        name: "name";
        reach: "reach";
        spend: "spend";
        total_actions: "total_actions";
        total_unique_actions: "total_unique_actions";
        unique_actions: "unique_actions";
        unique_clicks: "unique_clicks";
        unique_ctr: "unique_ctr";
        unique_impressions: "unique_impressions";
    }>;
}
