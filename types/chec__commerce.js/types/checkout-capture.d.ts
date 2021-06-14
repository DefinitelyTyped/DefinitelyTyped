import { Extrafield } from './extrafield';
import { Address } from './address';

export interface CheckoutCapture {
  line_items: any;
  discount_code?: string;
  extra_fields?: Extrafield[];
  customer: {
    firstname?: string;
    lastname?: string;
    email: string;
    phone?: string;
    meta?: any;
  };
  shipping?: Partial<Address>;
  fulfillment?: {
    shipping_method: string;
  };
  billing?: Partial<Address>;
  payment: {
    gateway: string;
    card?: {
      number?: string;
      token?: string;
      nonce?: string;
    };
    stripe?: {
      payment_method_id: string;
      payment_intent_id: string;
    };
    razorpay?: {
      payment_id: string;
    };
    paypal?: {
      action: string;
      payment_id: string;
      payer_id: string;
    },
    manual?: {
      id: string;
    };
  };
  pay_what_you_want?: string;
  meta?: any;
}
