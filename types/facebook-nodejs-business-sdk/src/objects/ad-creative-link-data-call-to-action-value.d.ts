import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeLinkDataCallToActionValue
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataCallToActionValue extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_destination: "app_destination";
        app_link: "app_link";
        application: "application";
        event_id: "event_id";
        lead_gen_form_id: "lead_gen_form_id";
        link: "link";
        link_caption: "link_caption";
        link_format: "link_format";
        page: "page";
        product_link: "product_link";
        whatsapp_number: "whatsapp_number";
    }>;
}
