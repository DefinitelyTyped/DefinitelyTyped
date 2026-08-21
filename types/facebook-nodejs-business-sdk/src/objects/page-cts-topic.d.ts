import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageCTSTopic
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTSTopic extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        frequency: "frequency";
        image_hash: "image_hash";
        image_url: "image_url";
        subscriber: "subscriber";
        title: "title";
    }>;
}
