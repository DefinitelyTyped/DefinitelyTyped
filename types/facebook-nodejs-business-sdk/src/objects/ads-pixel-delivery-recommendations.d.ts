import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelDeliveryRecommendations
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelDeliveryRecommendations extends AbstractCrudObject {
    static get Fields(): Readonly<{
        custom_event_type: "custom_event_type";
        optimization_goal: "optimization_goal";
    }>;
}
