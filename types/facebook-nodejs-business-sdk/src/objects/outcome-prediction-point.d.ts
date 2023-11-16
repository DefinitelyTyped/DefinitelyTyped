import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * OutcomePredictionPoint
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OutcomePredictionPoint extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
        impressions: "impressions";
        reach: "reach";
        spend: "spend";
    }>;
}
