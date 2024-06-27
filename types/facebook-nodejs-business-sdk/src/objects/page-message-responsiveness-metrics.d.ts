import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageMessageResponsivenessMetrics
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageMessageResponsivenessMetrics extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_very_responsive: "is_very_responsive";
        response_rate: "response_rate";
        response_time: "response_time";
    }>;
}
