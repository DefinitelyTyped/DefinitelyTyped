import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdKeywords
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdKeywords extends AbstractCrudObject {
    static get Fields(): Readonly<{
        brands: "brands";
        product_categories: "product_categories";
        product_names: "product_names";
        search_terms: "search_terms";
    }>;
}
