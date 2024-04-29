import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageSavedFilter
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageSavedFilter extends AbstractCrudObject {
    static get Fields(): Readonly<{
        display_name: "display_name";
        filters: "filters";
        id: "id";
        page_id: "page_id";
        section: "section";
        time_created: "time_created";
        time_updated: "time_updated";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<PageSavedFilter>;
}
