import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * WindowsPhoneAppLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WindowsPhoneAppLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        app_name: "app_name";
        url: "url";
    }>;
}
