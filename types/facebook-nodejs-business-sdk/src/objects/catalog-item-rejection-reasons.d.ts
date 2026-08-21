import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemRejectionReasons
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemRejectionReasons extends AbstractCrudObject {
    static get Fields(): Readonly<{
        capability: "capability";
        rejection_information: "rejection_information";
    }>;
}
