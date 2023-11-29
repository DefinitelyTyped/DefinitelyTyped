import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CommerceMerchantSettingsSetupStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettingsSetupStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        deals_setup: "deals_setup";
        marketplace_approval_status: "marketplace_approval_status";
        marketplace_approval_status_details: "marketplace_approval_status_details";
        payment_setup: "payment_setup";
        review_status: "review_status";
        shop_setup: "shop_setup";
    }>;
}
