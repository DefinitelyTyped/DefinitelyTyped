import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelItemPrice
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelItemPrice extends AbstractCrudObject {
    static get Fields(): Readonly<{
        date: "date";
        item_price_coverage: "item_price_coverage";
    }>;
}
