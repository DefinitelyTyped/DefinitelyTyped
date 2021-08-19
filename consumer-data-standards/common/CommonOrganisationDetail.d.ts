import { CommonOrganisation } from "./CommonOrganisation";
import { CommonPhysicalAddressWithPurpose } from "./CommonPhysicalAddressWithPurpose";

export interface CommonOrganisationDetail extends CommonOrganisation {
  physicalAddresses: CommonPhysicalAddressWithPurpose[] | null;
}

