import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductCatalogPricingVariablesBatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogPricingVariablesBatch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        errors: "errors";
        errors_total_count: "errors_total_count";
        handle: "handle";
        status: "status";
    }>;
}
