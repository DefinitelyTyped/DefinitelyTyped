import { CommonPhysicalAddress } from "./CommonPhysicalAddress";
import { AddressPurposeType } from "./enums";

export interface CommonPhysicalAddressWithPurpose extends CommonPhysicalAddress {
  purpose: AddressPurposeType;
}

