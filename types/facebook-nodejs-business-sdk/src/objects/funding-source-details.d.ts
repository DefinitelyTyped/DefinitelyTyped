import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * FundingSourceDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundingSourceDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        coupon: "coupon";
        display_string: "display_string";
        id: "id";
        type: "type";
    }>;
}
