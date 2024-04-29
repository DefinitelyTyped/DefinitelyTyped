import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * InstagramShoppingMerchantReviewMessage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramShoppingMerchantReviewMessage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        help_url: "help_url";
        message: "message";
    }>;
}
