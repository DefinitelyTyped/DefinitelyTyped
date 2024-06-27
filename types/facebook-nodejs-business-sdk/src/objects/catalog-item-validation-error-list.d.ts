import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemValidationErrorList
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemValidationErrorList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        errors: "errors";
    }>;
}
