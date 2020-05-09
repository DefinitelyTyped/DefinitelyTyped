import { Emitter } from './emitter';

export type AdyenOptions = {
  invoiceUuid: string;
  countryCode?: string;
  shopperLocale?: string;
  skinCode?: string;
};

export type AdyenEvent = 'token' | 'error';

export interface AdyenInstance extends Emitter<AdyenEvent> {
  start: (adyenOptions: AdyenOptions) => void;
}

export type Adyen = (adyenOptions?: AdyenOptions) => AdyenInstance;
