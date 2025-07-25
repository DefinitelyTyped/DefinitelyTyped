import { Emitter } from '../emitter';
import { CheckoutPricingInstance } from './checkout';
import { SubscriptionPricingInstance } from './subscription';

export type Tax = {
  tax_code: string;
  vat_number?: string;
  amounts?: {
    now?: string;
    next?: string;
  };
};

export type PricingEvent =
  | 'change'
  | 'set.subscription'
  | 'set.plan'
  | 'set.addon'
  | 'set.adjustment'
  | 'set.address'
  | 'set.shippingAddress'
  | 'set.tax'
  | 'set.coupon'
  | 'unset.coupon'
  | 'error.coupon'
  | 'set.gift_card'
  | 'unset.gift_card';

export interface PricingInstance<PricingPromise> extends Emitter<PricingEvent> {
  reprice: (done: VoidFunction) => PricingPromise;
  remove: (opts: any, done: VoidFunction) => PricingPromise;
  reset: VoidFunction;
}

export type Pricing = {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#pricing|Pricing}
   */
  Checkout: () => CheckoutPricingInstance;

  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#pricing|Pricing}
   */
  Subscription: () => SubscriptionPricingInstance;
};
