import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PaymentPricepoints
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentPricepoints extends AbstractCrudObject {
    static get Fields(): Readonly<{
        mobile: "mobile";
    }>;
}
