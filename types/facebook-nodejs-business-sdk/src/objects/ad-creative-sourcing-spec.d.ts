import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeSourcingSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeSourcingSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        associated_product_set_id: "associated_product_set_id";
    }>;
}
