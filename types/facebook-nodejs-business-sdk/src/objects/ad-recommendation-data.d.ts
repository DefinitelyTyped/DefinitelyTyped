import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRecommendationData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRecommendationData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        link: "link";
    }>;
}
