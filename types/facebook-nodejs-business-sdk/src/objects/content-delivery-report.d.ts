import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ContentDeliveryReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContentDeliveryReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content_id: "content_id";
        creator_id: "creator_id";
        estimated_impressions: "estimated_impressions";
    }>;
}
