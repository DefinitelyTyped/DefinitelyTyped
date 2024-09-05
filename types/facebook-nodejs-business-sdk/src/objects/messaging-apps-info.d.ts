import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MessagingAppsInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessagingAppsInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        has_instagram_messaging_permission: "has_instagram_messaging_permission";
        has_messenger_messaging_permission: "has_messenger_messaging_permission";
        id: "id";
        name: "name";
    }>;
}
