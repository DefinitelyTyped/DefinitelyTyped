import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * InstantArticlesStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstantArticlesStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        error: "error";
        metadata: "metadata";
        metric: "metric";
        totals: "totals";
        x_axis_breakdown: "x_axis_breakdown";
    }>;
}
