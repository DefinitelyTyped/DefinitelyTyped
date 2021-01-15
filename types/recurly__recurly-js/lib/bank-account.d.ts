import { RecurlyError } from './error';
import { TokenHandler } from './token';

export type BillingInfoCommonFields = {
  name_on_account: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  vat_number?: string;
};

export type SepaBillingInfo = BillingInfoCommonFields & {
  name_on_account: string;

  /**
   * The International Bank Account Number, up to 34 alphanumeric characters comprising a country code; two check
   * digits; and a number that includes the domestic bank account number, branch identifier, and potential routing
   * information.
   */
  iban: string;
};

export type AccountInfo = BillingInfoCommonFields & {
  account_number: string;
  account_number_confirmation: string;
};

export type BacsBillingInfo = AccountInfo & {
  type: 'bacs';
  /**
   * Bank identifier code for UK based banks.
   */
  sort_code: string;
};

export type BecsBillingInfo = AccountInfo & {
  type: 'becs';
  branch_code: string;
};

export type BankAccountBillingInfo = AccountInfo & {
  routing_number: string;
};

export type BillingInfo = SepaBillingInfo | BacsBillingInfo | BecsBillingInfo | BankAccountBillingInfo;

export type BankInfoOptions = {
  /**
   * The routing number for a bank (ex: ‘123456780’)
   */
  routingNumber: string;
};

export type BankInfoPayload = {
  /**
   * Bank institution name (ex: Bank of Recurly)
   */
  bank_name: string;
};

export type BankInfoHandler = (err: RecurlyError, bankInfo: BankInfoPayload) => void;

export type BankInfo = (bankInfoOptions: BankInfoOptions, BankInfoHandler: BankInfoHandler) => void;

export type BankAccount = {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#getting-a-token-1|Getting a token}
   */
  token: (data: HTMLFormElement | BillingInfo, tokenHandler: TokenHandler) => void;

  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#recurlybankaccountbankinfo|BankInfo}
   */
  bankInfo: BankInfo;
};
