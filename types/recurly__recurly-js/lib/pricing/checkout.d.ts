import { PricingInstance, Tax } from '.';
import { Address } from '../address';
import { PricingPromise } from './promise';
import { SubscriptionPricingState } from './subscription';

export type ItemAdjustment = {
  /**
   * Item code reference. If provided, the amount and tax properties will be populated from the given item. An itemCode
   * may not be used to modify an adjustment in-place.
   */
  itemCode: string;

  /**
   * Number of units
   */
  quantity: number;

  /**
   * Currency code
   */
  currency?: string;

  /**
   * Unique identifier. Use this value to modify an adjustment in-place.
   */
  id?: string;
};

export type NonItemAdjustment = {
  /**
   * In unit price (1.0 for USD, etc)
   */
  amount: number;

  /**
   * Number of units
   */
  quantity: number;

  /**
   * Currency code
   */
  currency?: string;

  /**
   * Whether this adjustment is tax exempt
   */
  taxExempt: boolean;

  /**
   * Taxation code
   */
  taxCode: string;

  /**
   * Unique identifier. Use this value to modify an adjustment in-place.
   */
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

    /**
     * Total cost of all subscriptions. This is part of the subtotal.
     */
    subscriptions: string;

    /**
     * Total cost of all adjustments. This is part of the subtotal.
     */
    adjustments: string;

    /**
     * Amount discounted with coupon use.
     */
    discount: string;

    /**
     * Subtotal of the following pricing components.
     */
    subtotal: string;

    /**
     * Total subscription taxation.
     */
    taxes: string;

    /**
     * The gift card amount that will be applied to the purchase today.
     */
    giftCard: string;

    /**
     * Total subscription cost due now.
     */
    total: string;
  };
  next: {
    items: Item[];

    /**
     * Total cost of all subscriptions. This is part of the subtotal due at the next billing cycle.
     */
    subscriptions: string;

    /**
     * Total cost of all adjustments. This is part of the subtotal due at the next billing cycle.
     */
    adjustments: string;

    /**
     * Amount discounted for next billing cycle with coupon use.
     */
    discount: string;

    /**
     * Subtotal of the following pricing components due at the next billing cycle.
     */
    subtotal: string;

    /**
     * Total subscription taxation due at the next billing cycle.
     */
    taxes: string;

    /**
     * The gift card amount that will be applied to the next billing cycle cost.
     */
    giftCard: string;

    /**
     * Total subscription cost due at the next billing cycle.
     */
    total: string;
  };
  currency: {
    /**
     * ISO-4217 currency code.
     */
    code: string;

    /**
     * Symbolic representation of currency_code.
     */
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
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-checkoutpricingattach|CheckoutPricing.attach}
   */
  attach: (element: string | HTMLElement) => void;
}

export interface CheckoutPricingPromise
  extends CheckoutPricingInstance,
    PricingPromise<CheckoutPricingState, CheckoutPricingMethods> {}

export type CheckoutPricing = () => CheckoutPricingInstance;
