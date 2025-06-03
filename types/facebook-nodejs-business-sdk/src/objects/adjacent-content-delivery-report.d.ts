import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdjacentContentDeliveryReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdjacentContentDeliveryReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_id: "ad_id";
        content: "content";
        impression_id: "impression_id";
    }>;
}
