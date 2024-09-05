import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageLeadsAccessConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageLeadsAccessConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page: "page";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PageLeadsAccessConfig>;
}
