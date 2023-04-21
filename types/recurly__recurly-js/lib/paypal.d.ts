import { Emitter } from './emitter';

export type BraintreeConfig = {
  braintree: {
    clientAuthorization: string;
  };
  display?: {
    locale?: string;
    displayName?: string;
    amount?: string;
    enableShippingAddress?: boolean;
    shippingAddressOverride?: any;
    shippingAddressEditable?: boolean;
    billingAgreementDescription?: string;
    landingPageType?: string;
  };
};

export type DirectConfig = {
  gatewayCode?: string;
  display?: {
    locale?: string;
    displayName?: string;
    amount?: string;
    logoImageUrl?: string;
    headerImageUrl?: string;
  };
};

export type PayPalConfig = BraintreeConfig | DirectConfig;

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
