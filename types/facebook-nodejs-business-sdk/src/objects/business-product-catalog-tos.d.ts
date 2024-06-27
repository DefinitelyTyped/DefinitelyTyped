import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessProductCatalogTOS
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessProductCatalogTOS extends AbstractCrudObject {
    static get Fields(): Readonly<{
        accepted: "accepted";
        content: "content";
    }>;
}
