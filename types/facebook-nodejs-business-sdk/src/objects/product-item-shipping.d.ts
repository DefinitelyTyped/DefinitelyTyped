import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemShipping
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemShipping extends AbstractCrudObject {
    static get Fields(): Readonly<{
        shipping_country: "shipping_country";
        shipping_price_currency: "shipping_price_currency";
        shipping_price_value: "shipping_price_value";
        shipping_region: "shipping_region";
        shipping_service: "shipping_service";
    }>;
}
