import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRecommendationData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRecommendationData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        link: "link";
    }>;
}
