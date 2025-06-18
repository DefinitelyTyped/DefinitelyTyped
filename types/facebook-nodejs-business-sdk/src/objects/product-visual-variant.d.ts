import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductVisualVariant
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductVisualVariant extends AbstractCrudObject {
    static get Fields(): Readonly<{
        items: "items";
        unique_key: "unique_key";
    }>;
}
