import { RecurlyError } from './error';
import { TokenHandler } from './token';

export type BillingInfo = {
  routing_number: string;
  account_number: string;
  account_number_confirmation: string;
  account_type: string;
  iban?: string;
  name_on_account: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  vat_number?: string;
};

export type BankInfoOptions = {
  routingNumber: string;
};

export type BankInfoPayload = {
  bank_name: string;
};

export type BankInfoHandler = (err: RecurlyError, bankInfo: BankInfoPayload) => void;

export type BankInfo = (bankInfoOptions: BankInfoOptions, BankInfoHandler: BankInfoHandler) => void;

export type BankAccount = {
  token: (data: HTMLFormElement | BillingInfo, tokenHandler: TokenHandler) => void;
  bankInfo: BankInfo;
};
