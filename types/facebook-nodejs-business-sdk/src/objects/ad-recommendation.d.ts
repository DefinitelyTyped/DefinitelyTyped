import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRecommendation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRecommendation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        blame_field: "blame_field";
        code: "code";
        confidence: "confidence";
        importance: "importance";
        message: "message";
        recommendation_data: "recommendation_data";
        title: "title";
    }>;
    static get Confidence(): Readonly<{
        high: "HIGH";
        low: "LOW";
        medium: "MEDIUM";
    }>;
    static get Importance(): Readonly<{
        high: "HIGH";
        low: "LOW";
        medium: "MEDIUM";
    }>;
}
