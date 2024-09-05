import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MIXInsightsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MIXInsightsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        daily_age_gender_breakdown: "daily_age_gender_breakdown";
        daily_audio_library_values: "daily_audio_library_values";
        daily_ugc_values: "daily_ugc_values";
        daily_values: "daily_values";
        metric: "metric";
        monthly_audio_library_values: "monthly_audio_library_values";
        monthly_ugc_values: "monthly_ugc_values";
        monthly_values: "monthly_values";
        percent_growth: "percent_growth";
        shielded_fields: "shielded_fields";
        total_age_gender_breakdown: "total_age_gender_breakdown";
        total_audio_library_value: "total_audio_library_value";
        total_country_breakdown: "total_country_breakdown";
        total_locale_breakdown: "total_locale_breakdown";
        total_product_breakdown: "total_product_breakdown";
        total_ugc_value: "total_ugc_value";
        total_value: "total_value";
        trending_age: "trending_age";
        trending_gender: "trending_gender";
        trending_interest: "trending_interest";
        trending_territory: "trending_territory";
    }>;
}
