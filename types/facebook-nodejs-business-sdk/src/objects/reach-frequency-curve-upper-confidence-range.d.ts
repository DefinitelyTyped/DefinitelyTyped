import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ReachFrequencyCurveUpperConfidenceRange
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyCurveUpperConfidenceRange extends AbstractCrudObject {
    static get Fields(): Readonly<{
        impression_upper: "impression_upper";
        num_points: "num_points";
        reach: "reach";
        reach_upper: "reach_upper";
        uniq_video_views_2s_upper: "uniq_video_views_2s_upper";
        video_views_2s_upper: "video_views_2s_upper";
    }>;
}
