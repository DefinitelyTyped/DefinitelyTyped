
export const enum IndustryCodeVersionType {
    ANZSIC_1292_0_2006_V1_0 = "ANZSIC_1292.0_2006_V1.0",
    ANZSIC_1292_0_2006_V2_0 = "ANZSIC_1292.0_2006_V2.0",
}

export const enum OrganisationType {
    COMPANY = "COMPANY",
    GOVERNMENT_ENTITY = "GOVERNMENT_ENTITY",
    OTHER = "OTHER",
    PARTNERSHIP = "PARTNERSHIP",
    SOLE_TRADER = "SOLE_TRADER",
    TRUST = "TRUST"
}

export const enum AddressPurposeType {
    MAIL = "MAIL",
    PHYSICAL = "PHYSICAL",
    OTHER = "OTHER",
    REGISTERED = "REGISTERED",
    WORK = "WORK",
}

export const enum OccupationCodeVersionType {
    ANZSCO_1220_0_2006_V1_0 = "ANZSCO_1220.0_2006_V1.0",
    ANZSCO_1220_0_2006_V1_1 = "ANZSCO_1220.0_2006_V1.1",
    ANZSCO_1220_0_2013_V1_2 = "ANZSCO_1220.0_2013_V1.2",
    ANZSCO_1220_0_2013_V1_3 = "ANZSCO_1220.0_2013_V1.3",
}

export const enum PhoneNumberType {
    HOME = "HOME",
    INTERNATIONAL = "INTERNATIONAL",
    MOBILE = "MOBILE",
    OTHER = "OTHER",
    UNSPECIFIED = "UNSPECIFIED",
    WORK = "WORK"
}

export const enum CustomerUType {
    ORGANISATION = "organisation",
    PERSON = "person",
}

export const enum DiscoveryStatusType {
    OK = "OK",
    PARTIAL_FAILURE = "PARTIAL_FAILURE",
    SCHEDULED_OUTAGE = "SCHEDULED_OUTAGE",
    UNAVAILABLE = "UNAVAILABLE"
}