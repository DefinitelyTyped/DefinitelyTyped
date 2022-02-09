export interface OrderConditionals {
    collected_fullname: boolean;
    collected_shipping_address: boolean;
    collected_billing_address: boolean;
    collected_extra_fields: boolean;
    collected_tax: boolean;
    collected_eu_vat_moss_evidence: boolean;
    has_physical_fulfillment: boolean;
    has_digital_fulfillment: boolean;
    has_extend_fulfillment: boolean;
    has_extend_apps: boolean;
    has_webhook_fulfillment: boolean;
    has_pay_what_you_want: boolean;
    has_discounts: boolean;
    has_subscription_items: boolean;
    is_free: boolean;
    is_fulfilled: boolean;
}
