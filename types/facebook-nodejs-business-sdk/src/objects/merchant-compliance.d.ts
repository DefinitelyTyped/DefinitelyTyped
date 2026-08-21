import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MerchantCompliance
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MerchantCompliance extends AbstractCrudObject {
    static get Fields(): Readonly<{
        active_campaigns: "active_campaigns";
        compliance_status: "compliance_status";
        count_down_start_time: "count_down_start_time";
        purchase: "purchase";
        purchase_conversion_value: "purchase_conversion_value";
    }>;
}
