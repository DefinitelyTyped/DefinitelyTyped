import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdKpiShift
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdKpiShift extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_set: "ad_set";
        cost_per_result_shift: "cost_per_result_shift";
        enough_effective_days: "enough_effective_days";
        result_indicator: "result_indicator";
        result_shift: "result_shift";
        spend_shift: "spend_shift";
    }>;
}
