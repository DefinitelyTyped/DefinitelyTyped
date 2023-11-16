import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativePhotoData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePhotoData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        branded_content_shared_to_sponsor_status: "branded_content_shared_to_sponsor_status";
        branded_content_sponsor_page_id: "branded_content_sponsor_page_id";
        caption: "caption";
        image_hash: "image_hash";
        page_welcome_message: "page_welcome_message";
        url: "url";
    }>;
}
