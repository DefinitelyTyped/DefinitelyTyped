import { Merchant } from './merchant';
import { Extrafield } from './extrafield';
import { ShippingMethod } from './shipping-method';
import { Live } from './live';
import { Price } from './price';
import { SelectedVariant } from './selected-variant';

export interface CheckoutToken {
  id: string;
  cart_id: string | null;
  created: number;
  expires: number;
  analytics: any;
  conditionals: {
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    has_physical_delivery: boolean;
    has_digital_delivery: boolean;
    has_available_discounts: boolean;
    has_pay_what_you_want: boolean;
    collects_extra_fields: boolean;
    is_cart_free: boolean;
  };
  collects: {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
  };
  has: {
    physical_delivery: boolean;
    digital_delivery: boolean;
    available_discounts: boolean;
    pay_what_you_want: boolean;
  };
  is: {
    cart_free: boolean,
  };
  line_items: CheckoutTokenLineItem[];
  merchant: Merchant;
  extra_fields: Extrafield[];
  gateways: {
    available: {
      test_gateway: boolean;
      stripe: boolean;
      square: boolean;
      paypal: boolean;
      paymill: boolean;
      razorpay: boolean;
      manual: boolean;
    };
    available_count: number;
    test_gateway?: {
      type: string;
      settings: any;
    };
    stripe?: {
      type: string;
      settings: {
        publishable_key: string;
      };
      cards_accepted: string[];
    };
    square?: {
      type: string;
      settings: {
        application_id: string;
        square_merchant_id: string;
      };
      cards_accepted: string[];
    };
    paypal?: {
      type: string;
      settings: {
        email: string;
      },
    },
    paymill?: {
      type: string;
      settings: {
        public_key: string;
      },
      cards_accepted: string[];
    },
    razorpay?: {
      type: string;
      settings: {
        key_id: string;
      };
    };
    manual?: Array<{
      id: string;
      name: string;
      details: any;
    }>;
  };
  shipping_methods: ShippingMethod[];
  live: Live;
}

export interface CheckoutTokenLineItem {
  id: string;
  product_id: string;
  name: string;
  image: string | null;
  description: string | null;
  quantity: number;
  price: Price;
  subtotal: Price;
  variants: SelectedVariant[];
  conditionals: {
    is_active: boolean;
    is_free: boolean;
    is_pay_what_you_want: boolean;
    is_inventory_managed: boolean;
    is_sold_out: boolean;
    has_digital_delivery: boolean;
    has_physical_delivery: boolean;
    has_images: boolean;
    has_video: boolean;
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    collects_extra_fields: boolean;
  };
  is: {
    active: boolean;
    free: boolean;
    pay_what_you_want: boolean;
    inventory_managed: boolean;
    sold_out: boolean;
  };
  has: {
      digital_delivery: boolean;
      physical_delivery: boolean;
      images: boolean;
      video: boolean;
  };
  collects: {
      fullname: boolean;
      shipping_address: boolean;
      billing_address: boolean;
      extra_fields: boolean;
  };
}
