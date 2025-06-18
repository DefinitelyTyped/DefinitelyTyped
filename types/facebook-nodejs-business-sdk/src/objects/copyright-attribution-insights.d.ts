import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CopyrightAttributionInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightAttributionInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        l7_attribution_page_view: "l7_attribution_page_view";
        l7_attribution_page_view_delta: "l7_attribution_page_view_delta";
        l7_attribution_video_view: "l7_attribution_video_view";
        l7_attribution_video_view_delta: "l7_attribution_video_view_delta";
        metrics_ending_date: "metrics_ending_date";
    }>;
}
