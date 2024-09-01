import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RightsManagerInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RightsManagerInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        error: "error";
        error_message: "error_message";
        metadata: "metadata";
        totals: "totals";
        x_axis_breakdown: "x_axis_breakdown";
    }>;
}
