import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageCategory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCategory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        api_enum: "api_enum";
        fb_page_categories: "fb_page_categories";
        id: "id";
        name: "name";
    }>;
}
