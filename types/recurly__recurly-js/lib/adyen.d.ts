import { Emitter } from './emitter';

export type AdyenOptions = {
  /**
   * Invoice Uuid from PendingPurchase
   */
  invoiceUuid: string;

  /**
   * 2 Digit Country Code
   */
  countryCode?: string;

  /**
   * Shopper locale for Payment Modal
   */
  shopperLocale?: string;

  /**
   * Skin code provided by Adyen
   */
  skinCode?: string;
};

export type AdyenEvent = 'token' | 'error';

export interface AdyenInstance extends Emitter<AdyenEvent> {
  /**
   * Invokes the Adyen Payment Modal
   */
  start: (adyenOptions: AdyenOptions) => void;
}

export type Adyen = (adyenOptions?: AdyenOptions) => AdyenInstance;
