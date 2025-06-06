import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGUserSubscribedAppsData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserSubscribedAppsData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        subscribed_fields: "subscribed_fields";
    }>;
}
