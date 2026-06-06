import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeObjectStorySpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeObjectStorySpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        instagram_user_id: "instagram_user_id";
        link_data: "link_data";
        page_id: "page_id";
        photo_data: "photo_data";
        product_data: "product_data";
        template_data: "template_data";
        text_data: "text_data";
        video_data: "video_data";
    }>;
}
