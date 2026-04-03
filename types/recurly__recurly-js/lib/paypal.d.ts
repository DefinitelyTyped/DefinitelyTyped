import { Emitter } from './emitter';

export type PayPalDisplayConfig = {
  locale?: string;
  displayName?: string;
  amount?: string;
};

export type BraintreeConfig = {
  braintree: {
    clientAuthorization: string;
  };
  display?: PayPalDisplayConfig & {
    enableShippingAddress?: boolean;
    shippingAddressOverride?: any;
    shippingAddressEditable?: boolean;
    billingAgreementDescription?: string;
    landingPageType?: string;
  };
};

export type DirectConfig = {
  gatewayCode?: string;
  display?: PayPalDisplayConfig & {
    logoImageUrl?: string;
    headerImageUrl?: string;
  };
};

export type UsagePattern =
  | 'SUBSCRIPTION_PREPAID'
  | 'SUBSCRIPTION_POSTPAID'
  | 'RECURRING_PREPAID'
  | 'RECURRING_POSTPAID'
  | 'UNSCHEDULED_POSTPAID'
  | 'UNSCHEDULED_PREPAID'
  | 'INSTALLMENT_POSTPAID'
  | 'INSTALLMENT_PREPAID';

export type BillingPlan = {
  [key: string]: any;
};

export type PayPalCompleteConfig = {
  payPalComplete?: boolean | { target: string; buttonOptions?: object };
  display?: PayPalDisplayConfig;
  gatewayCode?: string;
  usagePattern?: UsagePattern;
  billingPlan?: BillingPlan;
};

export type PayPalConfig = BraintreeConfig | DirectConfig | PayPalCompleteConfig;

export type PayPalEvent = 'error' | 'token' | 'cancel' | 'ready';

export type PayPalStartOptions = {
  options: {
    description: string;
  }
};

export interface PayPalInstance extends Emitter<PayPalEvent> {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-paypalstart|PayPal.start}
   */
  start: (payPalStartOptions?: PayPalStartOptions) => void;

  destroy: VoidFunction;
}

export type PayPal = (config?: PayPalConfig) => PayPalInstance;
