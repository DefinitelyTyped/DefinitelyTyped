import { PhoneNumberType } from "./enums";

export interface CommonPhoneNumber {
  isPreferred?: boolean;
  purpose: PhoneNumberType;
  countryCode?: string;
  areaCode?: string;
  number: string;
  extension?: string;
  fullNumber: string;
}
