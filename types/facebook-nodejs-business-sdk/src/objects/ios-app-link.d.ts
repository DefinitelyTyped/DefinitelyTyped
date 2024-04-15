import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IosAppLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IosAppLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_name: "app_name";
        app_store_id: "app_store_id";
        url: "url";
    }>;
}
