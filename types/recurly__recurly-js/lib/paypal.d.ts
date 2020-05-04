import { Emitter } from './emitter';
import { TokenHandler } from './token';

export type BraintreeConfig = {
  braintree: {
    clientAuthorization: string;
  };
};

export type DirectConfig = {
  display?: {
    displayName?: string;
  };
};

export type PayPalConfig = BraintreeConfig | DirectConfig;

export type PayPalEvent = 'error' | 'token';

export type PayPalStartOptions = {
  options: {
    description: string;
  }
};

export interface PayPalInstance extends Emitter<PayPalEvent> {
  start: (payPalStartOptions?: PayPalStartOptions) => void;
  token: TokenHandler;
  destroy: VoidFunction;
}

export type PayPal = (config?: PayPalConfig) => PayPalInstance;
