import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * SplitTestWinner
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SplitTestWinner extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_object_level: "ad_object_level";
        confidences: "confidences";
        winner_ad_object_id: "winner_ad_object_id";
    }>;
}
