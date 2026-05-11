import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogCheckMarketplacePartnerDealsStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogCheckMarketplacePartnerDealsStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        errors: "errors";
        session_id: "session_id";
        status: "status";
    }>;
}
