import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductVariant
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductVariant extends AbstractCrudObject {
    static get Fields(): Readonly<{
        label: "label";
        options: "options";
        product_field: "product_field";
    }>;
}
