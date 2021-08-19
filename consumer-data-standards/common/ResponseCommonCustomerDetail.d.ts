import { Links, Meta } from "./shared";
import { CommonPersonDetail } from "./CommonPersonDetail";
import { CommonOrganisationDetail } from "./CommonOrganisationDetail";
import { CustomerUType } from "./enums";

export interface ResponseCommonCustomerDetail {
  data: Data;
  links: Links;
  meta?: Meta;
}

interface Data {
  customerUType: CustomerUType;
  person: CommonPersonDetail;
  organisation: CommonOrganisationDetail;
}
