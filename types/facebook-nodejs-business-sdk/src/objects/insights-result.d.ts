import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * InsightsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        description_from_api_doc: "description_from_api_doc";
        id: "id";
        name: "name";
        period: "period";
        title: "title";
        values: "values";
    }>;
    static get DatePreset(): Readonly<{
        data_maximum: "data_maximum";
        last_14d: "last_14d";
        last_28d: "last_28d";
        last_30d: "last_30d";
        last_3d: "last_3d";
        last_7d: "last_7d";
        last_90d: "last_90d";
        last_month: "last_month";
        last_quarter: "last_quarter";
        last_week_mon_sun: "last_week_mon_sun";
        last_week_sun_sat: "last_week_sun_sat";
        last_year: "last_year";
        maximum: "maximum";
        this_month: "this_month";
        this_quarter: "this_quarter";
        this_week_mon_today: "this_week_mon_today";
        this_week_sun_today: "this_week_sun_today";
        this_year: "this_year";
        today: "today";
        yesterday: "yesterday";
    }>;
    static get Period(): Readonly<{
        day: "day";
        days_28: "days_28";
        lifetime: "lifetime";
        month: "month";
        total_over_range: "total_over_range";
        week: "week";
    }>;
}
