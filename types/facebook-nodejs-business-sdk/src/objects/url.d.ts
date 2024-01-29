import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * URL
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class URL extends AbstractCrudObject {
    static get Fields(): Readonly<{
        engagement: "engagement";
        id: "id";
        og_object: "og_object";
        ownership_permissions: "ownership_permissions";
        scopes: "scopes";
    }>;
    static get Scopes(): Readonly<{
        news_tab: "NEWS_TAB";
        news_tab_dev_env: "NEWS_TAB_DEV_ENV";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<URL>;
    update(fields: string[], params?: Record<any, any>): Promise<URL>;
}
