import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogUserTasks
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogUserTasks extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        tasks: "tasks";
    }>;
}
