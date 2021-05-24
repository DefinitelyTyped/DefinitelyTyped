import { Merchant } from './merchant';
import { Extrafield } from './extrafield';
import { ShippingMethod } from './shipping-method';
import { Live } from './live';
import { Product } from './product';

export interface Cart {
  id: string,
  cart_id: string | null,
  conditionals: {
    collects_fullname: boolean,
    collects_shipping_address: boolean,
    collects_billing_address: boolean,
    has_physical_delivery: boolean,
    has_digital_delivery: boolean,
    has_available_discounts: boolean,
    has_pay_what_you_want: boolean,
    collects_extra_fields: boolean,
    is_cart_free: boolean
  },
  collects: {
    fullname: boolean,
    shipping_address: boolean,
    billing_address: boolean,
    extra_fields: boolean
  },
  has: {
    physical_delivery: boolean,
    digital_delivery: boolean,
    available_discounts: boolean,
    pay_what_you_want: boolean,
  },
  is: {
    cart_free: boolean,
  },
  merchant: Merchant,
  extra_fields: Extrafield[],
  products: Product[],
  gateways: {
    available: {
      test_gateway: boolean,
      stripe: boolean,
      square: boolean,
      paypal: boolean,
      paymill: boolean,
      razorpay: boolean,
      manual: boolean,
    },
    available_count: number,
    test_gateway?: {
      type: string,
      settings: any,
    },
    stripe?: {
      type: string,
      settings: {
        publishable_key: string,
      },
      cards_accepted: string[],
    },
    square?: {
      type: string,
      settings: {
        application_id: string,
        square_merchant_id: string,
      },
      cards_accepted: string[],
    },
    paypal?: {
      type: string,
      settings: {
        email: string,
      },
    },
    paymill?: {
      type: string,
      settings: {
        public_key: string,
      },
      cards_accepted: string[],
    },
    razorpay?: {
      type: string,
      settings: {
        key_id: string,
      },
    },
    manual?: {
      id: string,
      name: string,
      details: any,
    }[],
  },
  shipping_methods: ShippingMethod[],
  live: Live,
  created: number,
  expires: number,
}