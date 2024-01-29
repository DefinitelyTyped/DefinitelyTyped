import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountSubscribedApps
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountSubscribedApps extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        app_name: "app_name";
    }>;
}
