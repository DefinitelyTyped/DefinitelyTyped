import { PricingInstance, Tax } from '.';
import { Address } from '../address';
import { PricingPromise } from './promise';
import { SubscriptionPricingState } from './subscription';

export type ItemAdjustment = {
  itemCode: string;
  quantity: number;
  currency?: string;
  id?: string;
};

export type NonItemAdjustment = {
  amount: number;
  quantity: number;
  currency?: string;
  taxExempt: boolean;
  taxCode: string;
  id?: string;
};

export type Adjustment = ItemAdjustment | NonItemAdjustment;

export type Item = {
  type: string;
  id: string;
  amount: string;
  setupFee: string;
  addons: string;
  plan: string;
};

export type CheckoutPricingStateTax = {
  tax_type: string;
  region: string;
  rate: string;
};

export type CheckoutPrice = {
  now: {
    items: Item[];
    subscriptions: string;
    adjustments: string;
    discount: string;
    subtotal: string;
    taxes: string;
    giftCard: string;
    total: string;
  };
  next: {
    items: Item[];
    subscriptions: string;
    adjustments: string;
    discount: string;
    subtotal: string;
    taxes: string;
    giftCard: string;
    total: string;
  };
  currency: {
    code: string;
    symbol: string;
  };
  taxes: CheckoutPricingStateTax[];
};

export type CheckoutPricingState = {
  price: CheckoutPrice;
};

export interface CheckoutPricingMethods {
  address: (address: Address) => CheckoutPricingPromise;
  adjustment: (adjustment: Adjustment) => CheckoutPricingPromise;
  coupon: (coupon: string) => CheckoutPricingPromise;
  currency: (currency: string) => CheckoutPricingPromise;
  giftCard: (giftcard: string) => CheckoutPricingPromise;
  shippingAddress: (address: Address) => CheckoutPricingPromise;
  tax: (tax: Tax) => CheckoutPricingPromise;
  subscription: (subscriptionPricing: SubscriptionPricingState) => CheckoutPricingPromise;
}

export interface CheckoutPricingInstance extends CheckoutPricingMethods, PricingInstance<CheckoutPricingPromise> {
  attach: (element: string | HTMLElement) => void;
}

export interface CheckoutPricingPromise
  extends CheckoutPricingInstance,
    PricingPromise<CheckoutPricingState, CheckoutPricingMethods> {}

export type CheckoutPricing = () => CheckoutPricingInstance;
