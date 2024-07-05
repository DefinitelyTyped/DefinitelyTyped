import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PublisherDeliveryReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherDeliveryReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content_types: "content_types";
        estimated_impressions: "estimated_impressions";
        name: "name";
        status: "status";
        url: "url";
    }>;
}
