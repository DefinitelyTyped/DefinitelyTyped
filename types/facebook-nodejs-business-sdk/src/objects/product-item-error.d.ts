import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductItemError
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemError extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        error_priority: "error_priority";
        error_type: "error_type";
        title: "title";
    }>;
}
