import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * WindowsAppLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WindowsAppLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        app_name: "app_name";
        package_family_name: "package_family_name";
        url: "url";
    }>;
}
