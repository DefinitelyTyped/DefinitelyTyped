import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemLandingPageData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemLandingPageData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        availability: "availability";
    }>;
    static get Availability(): Readonly<{
        available_for_order: "available for order";
        discontinued: "discontinued";
        in_stock: "in stock";
        mark_as_sold: "mark_as_sold";
        out_of_stock: "out of stock";
        pending: "pending";
        preorder: "preorder";
    }>;
}
