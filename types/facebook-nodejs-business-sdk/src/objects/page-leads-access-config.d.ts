import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageLeadsAccessConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageLeadsAccessConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page: "page";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): PageLeadsAccessConfig;
}
