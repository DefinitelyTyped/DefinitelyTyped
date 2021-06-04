import { Price } from './price';
import { Currency } from './currency';

export type PaymentStatus = 'paid' | 'not_paid' | 'partially_paid' | 'refunded' | 'authorized';

export type FulfillmentStatus = 'fulfilled' | 'not_fulfilled' | 'partially_fulfilled' | 'returned';

export interface CheckoutCaptureResponse {
  id: string;
  sandbox: boolean;
  checkout_token_id: string;
  cart_id: string;
  customer_reference: string;
  created: number;
  status_payment: PaymentStatus;
  status_fulfillment: FulfillmentStatus;
  currency: Currency;
  order_value: Price;
  redirect: string;
  customer: {
    email: string;
    firstname: string;
    lastname: string;
  };
  extra_fields: Array<{
    id: string;
    name: string;
    type: string;
    required: boolean;
    value: string;
  }>;
  conditionals: {
    collected_fullname: boolean;
    collected_shipping_address: boolean;
    collected_billing_address: boolean;
    collected_extra_fields: boolean;
    collected_tax: boolean;
    collected_eu_vat_moss_evidence: boolean;
    has_physical_fulfillment: boolean;
    has_digital_fulfillment: boolean;
    has_pay_what_you_want: boolean;
    has_discounts: boolean;
    is_free: boolean;
    is_fulfilled: boolean;
  };
  collected: {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
    tax: boolean;
    eu_vat_moss_evidence: boolean;
  };
  has: {
    physical_fulfillment: boolean;
    digital_fulfillment: boolean;
    pay_what_you_want: boolean;
    discounts: boolean;
  };
  is: {
    free: boolean;
    fulfilled: boolean;
  };
  fraud: {
    provider: string;
    response: any;
  };
  meta: any;
}
