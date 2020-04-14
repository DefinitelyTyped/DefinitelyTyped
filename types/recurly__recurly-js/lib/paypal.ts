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

export interface PayPalInstance extends Emitter<PayPalEvent> {
  start: VoidFunction;
  token: TokenHandler;
  destroy: VoidFunction;
}

export type PayPal = (config?: PayPalConfig) => PayPalInstance;
