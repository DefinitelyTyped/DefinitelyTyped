export interface BankingInternationalPayee {
  beneficiaryDetails: BeneficiaryDetails;
  bankDetails: BankDetails;
}
export interface BeneficiaryDetails {
  name?: string;
  country: string;
  message?: string;
}
export interface BankDetails {
  country: string;
  accountNumber: string;
  bankAddress?: BankAddress;
  beneficiaryBankBIC?: string;
  fedWireNumber?: string;
  sortCode?: string;
  chipNumber?: string;
  routingNumber?: string;
  legalEntityIdentifier?: string;
}
export interface BankAddress {
  name: string;
  address: string;
}
