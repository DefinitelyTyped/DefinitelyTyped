import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AndroidAppLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AndroidAppLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_name: "app_name";
        class: "class";
        package: "package";
        url: "url";
    }>;
}
