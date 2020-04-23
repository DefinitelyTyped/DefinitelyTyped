import { Emitter } from './emitter';
import { CheckoutPricingInstance } from './pricing/checkout';

export type ApplePayConfig = {
  country: string;
  currency: string;
  label: string;
  total: string;
  pricing?: CheckoutPricingInstance;
  form?: HTMLFormElement;
};

export type ApplePayEvent =
  | 'token'
  | 'error'
  | 'ready'
  | 'shippingContactSelected'
  | 'paymentAuthorized'
  | 'shippingMethodSelected'
  | 'cancel';

export interface ApplePayInstance extends Emitter<ApplePayEvent> {
  ready: (cb?: VoidFunction) => void;
  begin: (cb?: VoidFunction) => void;
}

export type ApplePay = (config: ApplePayConfig) => ApplePayInstance;
