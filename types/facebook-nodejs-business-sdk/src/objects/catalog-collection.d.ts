import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogCollection
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogCollection extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        title: "title";
        url: "url";
    }>;
}
