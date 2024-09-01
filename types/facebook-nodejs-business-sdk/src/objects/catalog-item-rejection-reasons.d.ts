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
    static get Capability(): Readonly<{
        business_inbox_in_messenger: "business_inbox_in_messenger";
        shops: "shops";
        test_capability: "test_capability";
        universal_checkout: "universal_checkout";
        us_marketplace: "us_marketplace";
    }>;
}
