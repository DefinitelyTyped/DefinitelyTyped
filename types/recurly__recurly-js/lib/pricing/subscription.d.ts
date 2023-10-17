import { PricingInstance, Tax } from '.';
import { Address } from '../address';
import { PricingPromise } from './promise';

export type PlanOptions = {
  quantity?: number;
};

export type AddonOptions = {
  quantity?: number;
};

export type SubscriptionPricingStateTax = {
  tax_type: string;
  region: string;
  rate: string;
};

export type SubscriptionPricingState = {
  price: {
    now: {
      subtotal: string;
      plan: string;
      addons: string;
      setup_fee: string;
      discount: string;
      tax: string;
      total: string;
    };
    next: {
      subtotal: string;
      plan: string;
      addons: string;
      setup_fee: string;
      discount: string;
      tax: string;
      total: string;
    };
    base: {
      plan: {
        unit: string;
        setup_fee: string;
      };
      addons: {
        [addon: string]: string;
      };
    };
    addons: {
      [addon: string]: string;
    };
    currency: {
      code: string;
      symbol: string;
    };
    taxes: SubscriptionPricingStateTax[];
  };
};

export interface SubscriptionPricingMethods {
  addon: (addonCode: string, addonOptions?: AddonOptions) => SubscriptionPricingPromise;
  address: (address: Address) => SubscriptionPricingPromise;
  coupon: (coupon: string) => SubscriptionPricingPromise;
  currency: (currency: string) => SubscriptionPricingPromise;
  giftcard: (giftcard: string) => SubscriptionPricingPromise;
  plan: (plan: string, planOptions?: PlanOptions) => SubscriptionPricingPromise;
  shippingAddress: (address: Address) => SubscriptionPricingPromise;
  tax: (tax: Tax) => SubscriptionPricingPromise;
}

export interface SubscriptionPricingInstance
  extends SubscriptionPricingMethods,
    PricingInstance<SubscriptionPricingPromise> {
  attach: (element: string | HTMLElement) => void;
}

export interface SubscriptionPricingPromise
  extends SubscriptionPricingInstance,
    PricingPromise<SubscriptionPricingState, SubscriptionPricingMethods> {}

export type SubscriptionPricing = () => SubscriptionPricingInstance;
