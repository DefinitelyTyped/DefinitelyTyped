import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ReachFrequencyEstimatesCurve
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyEstimatesCurve extends AbstractCrudObject {
    static get Fields(): Readonly<{
        budget: "budget";
        conversion: "conversion";
        impression: "impression";
        interpolated_reach: "interpolated_reach";
        num_points: "num_points";
        raw_impression: "raw_impression";
        raw_reach: "raw_reach";
        reach: "reach";
    }>;
}
