import { CommonEmailAddress } from "./CommonEmailAddress";
import { CommonPerson } from "./CommonPerson";
import { CommonPhoneNumber } from "./CommonPhoneNumber";
import { CommonPhysicalAddressWithPurpose } from "./CommonPhysicalAddressWithPurpose";

export interface CommonPersonDetail extends CommonPerson {
  phoneNumbers: CommonPhoneNumber[] | null;
  emailAddresses: CommonEmailAddress[] | null;
  physicalAddresses: CommonPhysicalAddressWithPurpose[] | null;
}

