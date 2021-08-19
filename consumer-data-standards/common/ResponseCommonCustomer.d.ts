import { Links, Meta } from "./shared";
import { CommonPerson } from "./CommonPerson";
import { CommonOrganisation } from "./CommonOrganisation";
import { CustomerUType } from "./enums";

export interface ResponseCommonCustomer {
  data: Data;
  links: Links;
  meta?: Meta;
}
interface Data {
  customerUType: CustomerUType;
  person?: CommonPerson;
  organisation?: CommonOrganisation;
}
