import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogCheckMarketplacePartnerSellersStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogCheckMarketplacePartnerSellersStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        sample_errors: "sample_errors";
        session_id: "session_id";
        status: "status";
    }>;
}
