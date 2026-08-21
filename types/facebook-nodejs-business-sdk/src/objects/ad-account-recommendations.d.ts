import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountRecommendations
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountRecommendations extends AbstractCrudObject {
    static get Fields(): Readonly<{
        recommendations: "recommendations";
    }>;
}
