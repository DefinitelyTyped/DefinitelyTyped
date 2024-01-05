import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCustomizationRuleSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCustomizationRuleSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        caption: "caption";
        customization_spec: "customization_spec";
        description: "description";
        image_hash: "image_hash";
        link: "link";
        message: "message";
        name: "name";
        priority: "priority";
        template_url_spec: "template_url_spec";
        video_id: "video_id";
    }>;
}
