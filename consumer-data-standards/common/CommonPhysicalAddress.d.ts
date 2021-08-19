import { CommonPAFAddress } from "./CommonPAFAddress";
import { CommonSimpleAddress } from "./CommonSimpleAddress";

export interface CommonPhysicalAddress {
  addressUType: string;
  simple?: CommonSimpleAddress;
  paf?: CommonPAFAddress;
}
