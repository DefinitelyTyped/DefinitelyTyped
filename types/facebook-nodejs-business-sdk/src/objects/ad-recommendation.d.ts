import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRecommendation

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRecommendation extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Confidence(): Record<string, any>;
    static get Importance(): Record<string, any>;
}
