import { Links } from "../banking";

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
    export interface CommonEmailAddress {
        isPreferred?: boolean;
        purpose: string;
        address: string;
    }
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
    export interface CommonOrganisationDetail extends CommonOrganisation {
        physicalAddresses: CommonPhysicalAddressWithPurpose[] | null;
    }
    export interface CommonPAFAddress {
        dpid?: string;
        thoroughfareNumber1?: number;
        thoroughfareNumber1Suffix?: string;
        thoroughfareNumber2?: number;
        thoroughfareNumber2Suffix?: string;
        flatUnitType?: string;
        flatUnitNumber?: string;
        floorLevelType?: string;
        floorLevelNumber?: string;
        lotNumber?: string;
        buildingName1?: string;
        buildingName2?: string;
        streetName?: string;
        streetType?: string;
        streetSuffix?: string;
        postalDeliveryType?: string;
        postalDeliveryNumber?: number;
        postalDeliveryNumberPrefix?: string;
        postalDeliveryNumberSuffix?: string;
        localityName: string;
        postcode: string;
        state: string;
    }
    export interface CommonPerson {
        lastUpdateTime?: string;
        firstName?: string;
        lastName: string;
        middleNames: string[] | null;
        prefix?: string;
        suffix?: string;
        occupationCode?: string;
        occupationCodeVersion?: OccupationCodeVersionType;
    }
    export interface CommonPersonDetail extends CommonPerson {
        phoneNumbers: CommonPhoneNumber[] | null;
        emailAddresses: CommonEmailAddress[] | null;
        physicalAddresses: CommonPhysicalAddressWithPurpose[] | null;
    }
    export interface CommonPhoneNumber {
        isPreferred?: boolean;
        purpose: PhoneNumberType;
        countryCode?: string;
        areaCode?: string;
        number: string;
        extension?: string;
        fullNumber: string;
    }

    export interface CommonPhysicalAddress {
        addressUType: string;
        simple?: CommonSimpleAddress;
        paf?: CommonPAFAddress;
    }
    export interface CommonPhysicalAddress {
        addressUType: string;
        simple?: CommonSimpleAddress;
        paf?: CommonPAFAddress;
    }
    export interface CommonPhysicalAddressWithPurpose extends CommonPhysicalAddress {
        purpose: AddressPurposeType;
    }
    export interface CommonSimpleAddress {
        mailingName?: string;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        postcode?: string;
        city: string;
        state: string;
        country?: string;
    }
    export interface DiscoveryOutage {
        outageTime: string;
        duration: string;
        isPartial?: boolean;
        explanation: string;
    }
    export interface  ResponseCommonCustomer {
        data: ResponseCommonCustomer;
        links: Links;
        meta?: any;
    }
    export interface  ResponseCommonCustomer {
        customerUType: CustomerUType;
        person?: CommonPerson;
        organisation?: CommonOrganisation;
    }
    export interface  ResponseCommonCustomerDetail {
        data: ResponseCommonCustomerDetail;
        links: Links;
        meta?: any;
    }

    export interface  ResponseCommonCustomerDetail {
        customerUType: CustomerUType;
        person: CommonPersonDetail;
        organisation: CommonOrganisationDetail;
    }
    export interface  ResponseCommonDiscoveryStatus {
        data: ResponseCommonDiscoveryStatusData;
        links: Links;
        meta?: any;
    }
    export interface  ResponseCommonDiscoveryStatusData {
        status: DiscoveryStatusType;
        explanation?: string;
        detectionTime?: string;
        expectedResolutionTime?: string;
        updateTime: string;
    }
    export interface  ResponseDiscoveryOutagesList {
        data: ResponseDiscoveryOutagesList;
        links: Links;
        meta?: any;
    }
    export interface  ResponseDiscoveryOutagesList {
        outages: DiscoveryOutage[] | null;
    }

    export interface  ResponseErrorListV2 {
        errors?: ErrorsEntity[] | null;
    }

    export interface  ErrorsEntity {
        code: string;
        title: string;
        detail: string;
        meta?: any;
    }
