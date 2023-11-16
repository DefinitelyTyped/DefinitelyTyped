import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ShadowIGUserCatalogProductVariant
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserCatalogProductVariant extends AbstractCrudObject {
    static get Fields(): Readonly<{
        product_id: "product_id";
        variant_name: "variant_name";
    }>;
}
