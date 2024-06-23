import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductCatalogImageSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogImageSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        carousel_ad: "carousel_ad";
        single_ad: "single_ad";
    }>;
}
