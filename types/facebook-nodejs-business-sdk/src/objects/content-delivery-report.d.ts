import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ContentDeliveryReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContentDeliveryReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content_name: "content_name";
        content_url: "content_url";
        creator_name: "creator_name";
        creator_url: "creator_url";
        estimated_impressions: "estimated_impressions";
    }>;
}
