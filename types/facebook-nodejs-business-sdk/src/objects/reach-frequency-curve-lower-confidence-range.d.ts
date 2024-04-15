import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ReachFrequencyCurveLowerConfidenceRange
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyCurveLowerConfidenceRange extends AbstractCrudObject {
    static get Fields(): Readonly<{
        impression_lower: "impression_lower";
        num_points: "num_points";
        reach: "reach";
        reach_lower: "reach_lower";
        uniq_video_views_2s_lower: "uniq_video_views_2s_lower";
        video_views_2s_lower: "video_views_2s_lower";
    }>;
}
