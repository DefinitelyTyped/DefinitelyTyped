import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGShoppingProductAppeal
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGShoppingProductAppeal extends AbstractCrudObject {
    static get Fields(): Readonly<{
        eligible_for_appeal: "eligible_for_appeal";
        product_appeal_status: "product_appeal_status";
        product_id: "product_id";
        rejection_reasons: "rejection_reasons";
        review_status: "review_status";
    }>;
}
