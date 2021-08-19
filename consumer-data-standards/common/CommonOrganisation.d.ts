import { IndustryCodeVersionType, OrganisationType } from "./enums";


export interface CommonOrganisation {
  lastUpdateTime?: string;
  agentFirstName?: string;
  agentLastName: string;
  agentRole: string;
  businessName: string;
  legalName?: string;
  shortName?: string;
  abn?: string;
  acn?: string;
  isACNCRegistered?: boolean | null;
  industryCode?: string | null;
  industryCodeVersion?: IndustryCodeVersionType;
  organisationType: OrganisationType;
  registeredCountry?: string;
  establishmentDate?: string;
}
