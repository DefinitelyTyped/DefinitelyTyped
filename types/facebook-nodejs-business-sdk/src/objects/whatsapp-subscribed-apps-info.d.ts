import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsappSubscribedAppsInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsappSubscribedAppsInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        page_whatsapp_number: "page_whatsapp_number";
        subscribed_apps: "subscribed_apps";
    }>;
}
