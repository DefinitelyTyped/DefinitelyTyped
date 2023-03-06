import { Emitter } from './emitter';

export type BankRedirectEvent = 'token' | 'banks' | 'error' | 'countries';

export type PaymentMethodType = 'ideal' | 'sofort';

export type BankRedirectOptions = {
  /**
   * Token Payment method type.
   */
  payment_method_type: PaymentMethodType;

  /**
   * Issuer Id for iDeal Payment methods.
   */
  issuer_id?: string;

  /**
   * Country Code for sofort Payment methods.
   */
  country_code?: string;

  /**
   * Invoice Uuid from PendingPurchase.
   */
  invoice_uuid: string;
};

export type LoadBanksOptions = {
  /**
   * Token Payment method type.
   */
  payment_method_type: PaymentMethodType;
};

export type LoadCountriesOptions = LoadBanksOptions;

export interface BankRedirectInstance extends Emitter<BankRedirectEvent> {
  /**
   * Start the BankRedirect Payment Modal.
   */
  start: (data: BankRedirectOptions) => void;

  /**
   * Load the banks for the specified payment method type.
   */
  loadBanks: (data: LoadBanksOptions, attachTo?: string) => void;

  /**
   * Load the countries for the specified payment method type.
   */
  loadCountries: (data: LoadCountriesOptions, attachTo?: string) => void;
}

export type BankRedirect = () => BankRedirectInstance;
